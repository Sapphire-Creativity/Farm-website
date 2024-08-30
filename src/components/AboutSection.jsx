import AboutImage from "../assets/about-one-img-1.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
const AboutSection = () => {
	return (
		<section className="container">
			<div className="about-container">
				<div className="about-image">
					<img src={AboutImage} alt="" />
				</div>
				<div className="about-content">
					<h4>Farming with love</h4>
					<h2>Naturally Grown Produce Delivered to Your Doorstep</h2>

					<div className="list-items">
						<span>
							<IoIosCheckmarkCircle />
							Organic Fruits and Vegetables
						</span>

						<span>
							<IoIosCheckmarkCircle />
							Locally Sourced & Grown
						</span>
					</div>

					<p>
						At our organic farm, we are dedicated to providing you with the
						highest quality, farm-fresh produce that is both nutritious and
						delicious. Our fruits and vegetables are grown without the use of
						harmful pesticides or chemicals, ensuring that you receive only the
						purest, most natural flavors.
					</p>
					<p>
						We pride ourselves on sustainable farming practices that not only
						support the environment but also strengthen local communities by
						sourcing produce from nearby farms. From seasonal vegetables to
						juicy fruits, each item is handpicked to ensure optimal freshness
						and taste.
					</p>
					<p>
						By choosing our organic produce, you're not only nourishing your
						body but also contributing to a healthier planet and supporting
						local agriculture. Experience the difference of truly fresh, organic
						food delivered right to your doorstep.
					</p>

					<button className="btn btn-one">Discover More</button>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
