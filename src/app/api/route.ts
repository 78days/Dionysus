import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = process.env.GEMINI_MODEL ?? "gemini-3.6-flash";
const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/openai/";

export async function GET() {
	const apiKey = process.env.GEMINI_API_KEY;

	if (!apiKey) {
		return NextResponse.json(
			{ error: "GEMINI_API_KEY is not set" },
			{ status: 500 },
		);
	}

	const client = new OpenAI({
		apiKey,
		baseURL: BASE_URL,
	});
	const prompt = [
		{
			role: "user" as const,
			content:
				"Reply with a new business idea for events management , formatted with headings, sub-headings and bullet points",
		},
	];

	try {
		const stream = await client.chat.completions.create({
			model: MODEL,
			messages: prompt as any,
			stream: true,
		});

		const encoder = new TextEncoder();

		const readable = new ReadableStream<Uint8Array>({
			async start(controller) {
				try {
					for await (const chunk of stream) {
						const text = chunk.choices[0]?.delta?.content;
						if (!text) continue;

						for (const line of text.split("\n")) {
							controller.enqueue(encoder.encode(`data: ${line}\n`));
						}
						controller.enqueue(encoder.encode("\n"));
					}
				} catch (error) {
					console.error("Streaming error:", error);
				} finally {
					controller.close();
				}
			},
		});

		return new Response(readable, {
			headers: {
				"Content-Type": "text/event-stream",
				"Cache-Control": "no-cache, no-transform",
				Connection: "keep-alive",
			},
		});
} catch (error) {
		console.error("OpenAI request failed:", error);
		return NextResponse.json(
			{ error: "Failed to generate a response" },
			{ status: 502 },
		);
	}
}
