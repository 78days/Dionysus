"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

export default function ApiPage() {
	const [idea, setIdea] = useState<string>("...loading");

	useEffect(() => {
		const evt = new EventSource("/api");
		let buffer = "";

		evt.onmessage = (e) => {
			buffer += e.data;
			setIdea(buffer);
		};

		evt.onerror = () => {
			console.error("SSE error, closing");
			evt.close();
		};

		return () => {
			evt.close();
		};
	}, []);

	const loading = idea === "...loading";

	return (
		<main className="min-h-screen bg-blue-700 text-white py-12 px-4">
			<div className="container mx-auto max-w-3xl">
				<div className="mb-8">
					<a
						href="/"
						className="inline-flex items-center text-white/70 hover:text-white transition-colors"
					>
						← Back to Events
					</a>
				</div>

				<h1 className="text-4xl font-bold mb-2">Business Idea Generator</h1>
				<p className="text-white/70 mb-8">
					AI-powered innovation at your fingertips
				</p>

				<div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8">
					{loading ? (
						<div className="flex items-center justify-center py-12">
							<div className="animate-pulse text-white/70">
								Generating your business idea...
							</div>
						</div>
					) : (
						<div className="markdown-content text-white/90">
							<ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
								{idea}
							</ReactMarkdown>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
