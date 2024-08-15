import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className={`w-full flex items-center fixed top-0 z-20 bg-primary`}>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={logo}
						style={{ width: "80px", height: "80px" }}
						alt="logo"
						className="w-9 h-9 object-contain"
					/>
					{/* <p className="text-white text-[18px] font-bold cursor-pointer flex">
						Siddharth &nbsp; <span className="sm:block hidden">Patel</span>
					</p> */}
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{/* <li
						key="about"
						className={`${
							active === "About" ? "text-white" : "text-secondary"
						} hover:text-white text-[18px] font-medium cursor-pointer`}
						onClick={() => setActive("About")}
					>
						<a href="#about">About</a>
					</li>
					<li
						key="work"
						className={`${
							active === "Work" ? "text-white" : "text-secondary"
						} hover:text-white text-[18px] font-medium cursor-pointer`}
						onClick={() => setActive("Work")}
					>
						<a href="#work">Work</a>
					</li>
					<li
						key="projects"
						className={`${
							active === "Projects" ? "text-white" : "text-secondary"
						} hover:text-white text-[18px] font-medium cursor-pointer`}
						onClick={() => setActive("Projects")}
					>
						<a href="#projects">Projects</a>
					</li>
					<li
						key="contact"
						className={`${
							active === "Contact" ? "text-white" : "text-secondary"
						} hover:text-white text-[18px] font-medium cursor-pointer`}
						onClick={() => setActive("Contact")}
					>
						<a href="#contact">Contact</a>
					</li> */}
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain"
						onClick={() => {
							setToggle(!toggle);
						}}
					/>

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{navLinks.map((nav) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										active === nav.title ? "text-white" : "text-secondary"
									}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
