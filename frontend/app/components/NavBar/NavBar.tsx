import { Link } from "react-router";
import logo from "../../assets/linkLogo.png";
import { useState } from "react";

const navigation = [
	{ name: "New URL", href: "/new" },
	{ name: "List URLs", href: "/list" },
];

export default function NavBar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div>
			<header className="absolute inset-x-0 top-0 z-50">
				<nav
					aria-label="Global"
					className="flex items-center justify-between p-6 lg:px-8"
				>
					<div className="flex lg:flex-1">
						<Link to={"/"} className="-m-1.5 p-1.5">
							<span className="sr-only">Url Shortener</span>
							<img alt="link" src={logo} className="h-8 w-auto" />
						</Link>
						<p className="text-2xl pl-2 font-bold text-blue-900">
							Url Shortener
						</p>
					</div>
					<div className="flex lg:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Open main menu</span>
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className="text-sm/6 font-semibold text-gray-900"
							>
								{item.name}
							</Link>
						))}
					</div>
				</nav>
			</header>
		</div>
	);
}
