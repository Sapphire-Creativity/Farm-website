import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { farmersData } from "../data.js";

import TitleHeader from "../../src/components/TitleHeader.jsx";
import Image from "../assets/TeamImage/team-one-shape-1-1.png";
import ImageTwo from "../assets/TeamImage/team-one-shape-2-1.png";
const FarmerTeam = () => {
	return (
		<section className="container">
			<div className="FarmerTeam-container">
				<TitleHeader
					Subtitle={"Meet the Farmers"}
					Title={"Awesome farmers team here to help you"}
				/>
				<div className="Farmer-Team">
					{farmersData.map(({ id, name, role, image }) => (
						<div className="farmer-data">
							<div className="div-image">
								<img src={Image} alt="" />
							</div>

							<div className="div-image-two">
								<img src={ImageTwo} alt="" />
							</div>

							<div className="social-icons">
								<RiTwitterXFill />
								<BiLogoFacebook />
								<AiFillInstagram />
							</div>
							<div className="farmer-image">
								<img src={image} alt="" />
							</div>

							<div className="farmer-details">
								<h3>{name}</h3>
								<p>{role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FarmerTeam;
