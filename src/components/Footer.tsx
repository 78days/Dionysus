import { div } from "framer-motion/client";
import Link from "next/link";

const routes = [
  {
    path: "/terms-conditions",
    name: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];

const Footer = () => {
  return (
	
    <footer className="mt-[60%] border-t border-white/10 bg-transparent ">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="text-sm text-white/40 transition-colors hover:text-white/70"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;