import "./ServicesCarousel.css";
import CardImageOne from "../../assets/services-images/services-1-1.jpg";
import CardImageTwo from "../../assets/services-images/services-1-2 (1).jpg";
import CardImageThree from "../../assets/services-images/services-1-1.jpg";
import shapeImage from "../../assets/services-images/shape.png";
const ServicesCarousel = () => {
	return (
		<section className="container">
			<div className="services-carousel-container">
				<div className="services-card">
					<div className="image">
						<img src={CardImageOne} alt="" />
					</div>
					<img src={shapeImage} alt="" className="card-shape" />
					<div className="services-card-content">
						<h3>Agriculture services</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
							consequuntur!
						</p>

						<button className="btn">Read More</button>
					</div>
				</div>
				<div className="services-card">
					<div className="image">
						<img src={CardImageTwo} alt="" />
					</div>
					<img src={shapeImage} alt="" className="card-shape" />
					<div className="services-card-content">
						<h3>Organic services</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
							consequuntur!
						</p>

						<button className="btn">Read More</button>
					</div>
				</div>
				<div className="services-card">
					<div className="image">
						<img src={CardImageThree} alt="" />
					</div>
					<img src={shapeImage} alt="" className="card-shape" />
					<div className="services-card-content">
						<h3>Delivery services</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
							consequuntur!
						</p>

						<button className="btn">Read More</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesCarousel;
