import Hero from "../../components/Hero/Hero";
import ServiceImage from "../../assets/services-images/farmservices.jpg";
import "./services.css";
import ServicesCarousel from "../../components/services-carousel/ServicesCarousel";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/Copyright";
import CenterDiv from "../../components/CenterDiv";
import Newsletter from "../../components/Newsletter";
import Process from "../../components/Process/Process";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
const Services = () => {
	return (
		<>
			<CustomCursor />
			<Hero backgroundImage={ServiceImage}>
				<h2>Services</h2>
				<p>
					From Our Fields to Your Table – Nurturing Freshness, Growing Trust.
				</p>
			</Hero>
			<ServicesCarousel />
			<CenterDiv />
			<Process />
			<Newsletter />
			<Footer />
			<Copyright />
		</>
	);
};

export default Services;
