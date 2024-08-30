import HeaderImage from "../assets/main-slider-img-1-dark.png";

import ImageTwo from "../assets/team-one-shape-2-1.png";

const MainHeader = () => {
	return (
		<header>
			<img src={ImageTwo} className="image-two" alt="" />

			<div className="header-container">
				<div className="header-text">
					<h2>Fresh and Organic Products</h2>
					<h1>
						Choose & <span>Eat</span> the Healthy Food.
					</h1>

					<div className="home-buttons">
						<button className="btn btn-one">Learn More</button>
						<button className="btn">Shop Now</button>
					</div>
				</div>
				<div className="header-image">
					<img src={HeaderImage} alt="" />
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
