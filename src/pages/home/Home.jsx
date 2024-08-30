import AboutSection from "../../components/AboutSection";
import Categories from "../../components/Categories";
import CenterDiv from "../../components/CenterDiv";
import FarmerTeam from "../../components/FarmerTeam";
import Copyright from "../../components/Footer/Copyright";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/MainHeader";
import Newsletter from "../../components/Newsletter";
import ProductGallery from "../../components/Product Gallery/ProductGallery";
import Testimonial from "../../components/Testimonial";
import CustomCursor from "../../components/CustomCursor/CustomCursor";

import "./home.css";
const Home = () => {
	return (
		<>
			<CustomCursor />
			<MainHeader />
			<CenterDiv />
			<AboutSection />
			<Categories />
			<ProductGallery />
			<FarmerTeam />
			<Testimonial />
			<Newsletter />
			<Footer />
			<Copyright />
		</>
	);
};

export default Home;
