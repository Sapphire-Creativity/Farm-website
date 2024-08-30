import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo-1.png";
import { links } from "../../data";
import { RiMenu5Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);
	const [navBackground, setNavBackground] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 150) {
				setNavBackground(true);
			} else {
				setNavBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup event listener on unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={`navbar ${navBackground ? "nav-scrolled" : ""}`}>
			<div className="nav-container">
				<Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
					<img src={Logo} alt="Nav Logo" />
				</Link>
				<ul className={`nav-links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
					{links.map(({ name, path }, index) => (
						<li key={index}>
							<NavLink
								to={path}
								className={({ isActive }) => (isActive ? "active-nav" : "")}
								onClick={() => setIsNavShowing(false)}>
								{name}
							</NavLink>
						</li>
					))}
				</ul>

				<div className="cart">
					<HiOutlineShoppingCart className="cart-icon" />
					<Link to="/SignUp" onClick={() => setIsNavShowing(false)}>
						<RiAccountPinCircleLine className="account-icon" />
					</Link>
				</div>

				<button
					className="toggle-btn"
					onClick={() => setIsNavShowing((prev) => !prev)}>
					{isNavShowing ? <MdOutlineClose /> : <RiMenu5Line />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
