import { GiTakeMyMoney } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";

const CenterDiv = () => {
	return (
		<div className="center-div">
			<div className="inner-div">
				<div className="inner-div-icon">
					<GiTakeMyMoney />
				</div>
				<div className="inner-content">
					<h4>Return Policy</h4>
					<p>Money Back Guarantee</p>
				</div>
			</div>
			<div className="inner-div">
				<div className="inner-div-icon">
					<FaShippingFast />
				</div>
				<div className="inner-content">
					<h4>Free Shipping</h4>
					<p>On all orders above $100</p>
				</div>
			</div>
			<div className="inner-div">
				<div className="inner-div-icon">
					<IoStorefrontSharp />
				</div>
				<div className="inner-content">
					<h4>Store Locator</h4>
					<p>Find your nearest store</p>
				</div>
			</div>
			<div className="inner-div">
				<div className="inner-div-icon">
					<RiSecurePaymentFill />
				</div>
				<div className="inner-content">
					<h4>Secured Payment</h4>
					<p>Your payment is 100% secured</p>
				</div>
			</div>
		</div>
	);
};

export default CenterDiv;
