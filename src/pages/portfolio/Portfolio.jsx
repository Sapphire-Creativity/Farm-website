import "./portfolio.css";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import Hero from "../../components/Hero/Hero";
import PortfolioImage from "../../assets/farm-portfolio.jpg";
import TitleHeader from "../../components/TitleHeader";
const Portfolio = () => {
	return (
		<>
			<CustomCursor />

			<Hero backgroundImage={PortfolioImage}>
				<h2>Portfolio</h2>
				<p>Here is a curated list of our projects completed</p>
			</Hero>

			<TitleHeader Subtitle={"Check back later"} Title={"Page Coming Soon!"} />
		</>
	);
};

export default Portfolio;
