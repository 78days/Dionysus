import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/">
			<div>
				{/** biome-ignore lint/performance/noImgElement: <explanation> */}
<img
					src="https://www.shutterstock.com/image-vector/greek-god-dionysus-logo-design-1719450154"
					alt="logo"
					width={50}
					height={12}
				/>
			</div>
		</Link>
	);
};

export default Logo;
