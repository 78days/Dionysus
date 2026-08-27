import { twMerge } from "tailwind-merge";

type H1Props = {
	children: React.ReactNode,
    classname?: string

};
export default function H1({ children  , classname}: H1Props) {
	return (
		<h1 className={twMerge( "text-3xl lg:text-6xl font-bold tracking-tight mb-3" , classname)}>
			{children}
		</h1>
	);
}
