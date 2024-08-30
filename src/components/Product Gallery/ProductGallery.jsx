import TitleHeader from "../TitleHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiEyeLight } from "react-icons/pi";
import { MdStore } from "react-icons/md";
import { farmProduce } from "../../data";
import "./ProductGallery.css";


const ProductGallery = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	return (
		<section>
			<TitleHeader
				Subtitle={"Check New Products"}
				Title={"Today's Hottest Products Available for you"}
			/>
			<div className="carousel-container">
				<Slider {...settings}>
					{farmProduce.map(({ id, name, imageUrl, stock, price, discount }) => (
						<div className="Product" key={id}>
							{discount && <div className="discount-badge">{discount}%</div>}
							<div className="product-icons">
								<IoMdHeartEmpty />
								<PiEyeLight />
							</div>
							<div className="product-image">
								<img src={imageUrl} alt={name} />
							</div>
							<div className="product-content">
								<h3 className="product-name">{name}</h3>

								<div className="stock-info">
									<MdStore /> {stock} in stock
								</div>
								<h3>${price.toFixed(2)}</h3>
							</div>
							<button className="btn">Add to Cart</button>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default ProductGallery;
