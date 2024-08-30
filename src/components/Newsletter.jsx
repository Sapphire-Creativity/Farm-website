import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
	return (
		<div className="newsletter">
			<div className="newletter-content">
				<h2>Stay tune and get the latest update</h2>
				<p>
					Join our newsletter to receive the latest updates, exclusive offers,
					and invaluable resources delivered straight to your inbox.
				</p>
			</div>
			<div className="input-field">
				<input type="email" placeholder="Enter Email Address" />

				<div className="input-icon">
					<FaPaperPlane className="input-icon-icon" />
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
