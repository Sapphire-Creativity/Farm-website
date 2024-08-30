import "./Hero.css";

const Hero = ({ backgroundImage, children }) => {
	return (
		<header
			className="hero"
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="hero-overlay">{children}</div>
		</header>
	);
};

export default Hero;
