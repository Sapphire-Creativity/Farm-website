import TitleHeader from "../../src/components/TitleHeader";
import ImageOne from "../assets/categories-one-img-1.jpg";
import ImageTwo from "../assets/categories-one-img-2.jpg";
import ImageThree from "../assets/categories-one-img-3.jpg";
import ImageFour from "../assets/categories-one-img-4.jpg";

const Categories = () => {
	return (
		<section className="container">
			<div className="categories-container">
				<TitleHeader
					Subtitle={"Our Categories"}
					Title={"What we Offer to Our Customers"}
				/>
			</div>

			<div className="categories-list">
				<div className="category">
					<div className="category-image">
						<img src={ImageOne} alt="" />
					</div>

					<h3>Vegetables</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
						unde.
					</p>
					<button className="btn btn-one">See All</button>
				</div>
				<div className="category">
					<div className="category-image">
						<img src={ImageTwo} alt="" />
					</div>

					<h3>Fresh Fruits</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
						unde.
					</p>
					<button className="btn btn-one">See All</button>
				</div>
				<div className="category">
					<div className="category-image">
						<img src={ImageThree} alt="" />
					</div>

					<h3>Spices</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
						unde.
					</p>
					<button className="btn btn-one">See All</button>
				</div>
				<div className="category">
					<div className="category-image">
						<img src={ImageFour} alt="" />
					</div>

					<h3>Dried Products</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
						unde.
					</p>
					<button className="btn btn-one">See All</button>
				</div>
			</div>
		</section>
	);
};

export default Categories;
