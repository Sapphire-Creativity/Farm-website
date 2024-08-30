import TitleHeader from "../../src/components/TitleHeader.jsx";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css'
const Testimonial = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: true,
		centerPadding: "30px",

		responsive: [
			{
				breakpoint: 1024, // For screens smaller than 1024px
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					centerPadding: "20px",
				},
			},
			{
				breakpoint: 900, // For screens smaller than 768px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: "10px",
				},
			},
			{
				breakpoint: 480, // For screens smaller than 480px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: "5px",
				},
			},
		],
	};

	return (
		<section className="container">
			<div className="testimonial-container">
				<TitleHeader
					Subtitle={"Our Feedbacks"}
					Title={"What they’re talking about our company?"}
				/>

				<div className="testimonial">
					<Slider {...settings}>
						{testimonials.map(({ name, location, quote, image }) => {
							return (
								<div className="review-card">
									<FaQuoteLeft className="quote-icon" />
									<p>{quote}</p>
									<div className="author-profile">
										<div className="image">
											<img src={image} alt="" />
										</div>
										<div className="info">
											<h3>{name}</h3>
											<span>{location}</span>
										</div>
									</div>
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
