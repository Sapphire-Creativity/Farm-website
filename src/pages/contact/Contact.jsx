import React from "react";
import Copyright from "../../components/Footer/Copyright";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/Newsletter";
import ContactImage from "../../assets/farmcontact.jpg";
import TitleHeader from "../../components/TitleHeader";
import { BsPatchQuestion } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdMarkEmailRead } from "react-icons/md";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import "./contact.css";
import Faqs from "../../components/Faqs/Faqs";

const Contact = () => {
	const [result, setResult] = React.useState("");
	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "75f849b9-8898-4887-8d2a-3928894856c9");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};
	return (
		<>
			<CustomCursor />
			<Hero backgroundImage={ContactImage}>
				<h2>Contact us</h2>
				<p>We're Here to Help—Reach Out Anytime!</p>
			</Hero>

			<section className="container">
				<div className="map">
					<GoogleMap />
				</div>

				<div className="contact-info">
					<div className="info-section">
						<div className="info-icon">
							<BsPatchQuestion />
						</div>
						<div className="info-details">
							<h5>Have any question</h5>
							<a href="#">0916-094-4188</a>
						</div>
					</div>
					<div className="info-section">
						<div className="info-icon">
							<MdMarkEmailRead />
						</div>
						<div className="info-details">
							<h5>Write email</h5>
							<a href="">needhelp@company.com</a>
						</div>
					</div>
					<div className="info-section">
						<div className="info-icon">
							<HiLocationMarker />
						</div>
						<div className="info-details">
							<h5>Visit store</h5>
							<a href="#">Visit store, Company Address, Country.4</a>
						</div>
					</div>
					<div className="info-section">
						<div className="socials-icon">
							<a href="https://facebook.com" target="_blank" rel="noreferrer">
								<FaFacebookF className="social" />
							</a>
							<a href="https://instagram.com" target="_blank" rel="noreferrer">
								<RiInstagramFill className="social" />
							</a>
							<a href="https://twitter.com" target="_blank" rel="noreferrer">
								<FaXTwitter className="social" />
							</a>
							<a href="https://pinterest.com" target="_blank" rel="noreferrer">
								<FaPinterestP className="social" />
							</a>
						</div>
					</div>
				</div>
			</section>

			<TitleHeader
				Subtitle={"Write a Message"}
				Title={"We’re always here to help you"}
			/>

			<div className="form-container">
				<form onSubmit={onSubmit}>
					<div className="form-row">
						<input type="text" placeholder="Your Name" required />
						<input type="email" placeholder="Email Address" required />
					</div>

					<div className="form-row">
						<input type="text" placeholder="Subject" required />
						<input type="tel" placeholder="Enter Your Mobile Number" required />
					</div>

					<textarea
						id=""
						rows="6"
						placeholder="Enter Your Message"
						required></textarea>

					<button type="submit" className="btn">
						Submit Now
					</button>

					<span>{result}</span>
				</form>
			</div>

			<Faqs/>

			<Newsletter />
			<Footer />
			<Copyright />
		</>
	);
};

export default Contact;
