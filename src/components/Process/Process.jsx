import TitleHeader from "../TitleHeader";
import ProcessOne from "../../assets/services-images/feature-two-img-1.jpg";
import ProcessTwo from "../../assets/services-images/services-1-2 (1).jpg";
import ProcessThree from "../../assets/services-images/process-1-3.jpg";
import "./Process.css";

const Process = () => {
	return (
		<section className="container">
			<TitleHeader
				Subtitle={"3 Easy Steps"}
				Title={"Checkout our easy work steps to follow"}
			/>
			<div className="process-container">
				<div className="process-card">
					<div className="process-card-image">
						<div className="card-icon">
							<h2>01</h2>
						</div>
						<div className="process-image">
							<img src={ProcessOne} alt="" />
						</div>
					</div>

					<div className="process-card-content">
						<h3>Choose Products</h3>

						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
							sint expedita nulla obcaecati incidunt atque.
						</p>
					</div>
				</div>
				<div className="process-card">
					<div className="process-card-image">
						<div className="card-icon">
							<h2>02</h2>
						</div>

						<div className="process-image">
							<img src={ProcessTwo} alt="" />
						</div>
					</div>

					<div className="process-card-content">
						<h3>Connect to store</h3>

						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
							sint expedita nulla obcaecati incidunt atque.
						</p>
					</div>
				</div>
				<div className="process-card">
					<div className="process-card-image">
						<div className="card-icon">
							<h2>03</h2>
						</div>

						<div className="process-image">
							<img src={ProcessThree} alt="" />
						</div>
					</div>

					<div className="process-card-content">
						<h3>Get your delivery</h3>

						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
							sint expedita nulla obcaecati incidunt atque.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
