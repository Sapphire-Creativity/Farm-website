import AboutSection from "../../components/AboutSection";
import CenterDiv from "../../components/CenterDiv";
import Copyright from "../../components/Footer/Copyright";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import AboutImage from "../../components/Hero/Hero images/aboutImage.jpg";
import Shape from "../../assets/About-images/about-image-1.png";
import ImageOne from "../../assets/About-images/farmer-about.jpg";
import { IoPlay } from "react-icons/io5";
import FarmerTeam from "../../components/FarmerTeam";
import Newsletter from "../../components/Newsletter";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import "./about.css";

const About = () => {
	return (
		<>
			<CustomCursor />
			<Hero backgroundImage={AboutImage}>
				<h2>About Us</h2>
				<p>Rooted in Tradition, Growing with Passion</p>
			</Hero>
			<section className="container">
				<div className="about-container-section">
					<div className="about-content-section">
						<h4>Get to Know us</h4>
						<h2>Welcome to ogenix food provider</h2>
						<h3>
							We connect buyers and sellers of natural, organic products who are
							so beguiled demoralized charms of pleasure.
						</h3>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Excepturi, ad. Qui asperiores fugit dignissimos libero
							perspiciatis id consequuntur excepturi repellat odit itaque atque,
							eum nostrum voluptate corrupti ullam architecto rem culpa commodi
							optio quo sit cum alias. Quam asperiores sit libero, qui, deleniti
							culpa laborum laudantium eos animi error voluptate. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Excepturi, ad.
							<br />
							<br />
							Qui asperiores fugit dignissimos libero perspiciatis id
							consequuntur excepturi repellat odit itaque atque, eum nostrum
							voluptate corrupti ullam architecto rem culpa commodi optio quo
							sit cum alias. Quam asperiores sit libero, qui, deleniti culpa
							laborum laudantium eos animi error voluptate.
						</p>

						<img src={Shape} alt="" className="shape" />
					</div>
					<div className="about-image-section">
						<img src={ImageOne} alt="" className="image-one" />
					</div>
				</div>
			</section>

			<section className="center-background">
				<div className="center-content">
					<div className="play-icon-container">
						<IoPlay
							className="play-icon"
							style={{ color: "#ffcc00", fontSize: "2.5rem" }}
						/>
					</div>

					<h1>Be healthy & eat only fresh organic vegetables</h1>
				</div>
			</section>

			<AboutSection />
			<CenterDiv />
			<FarmerTeam />
			<Newsletter />
			<Footer />
			<Copyright />
		</>
	);
};

export default About;
