import React from "react";

const MapEmbed = () => {
	return (
		<div>
			<div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95373631590463!3d-37.81720974201427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a4659ed9f4f9!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1590061633077!5m2!1sen!2sau"
					width="100%"
					height="100%"
					frameBorder="0"
					style={{ border: 0 }}
					allowFullScreen=""
					aria-hidden="false"
					tabIndex="0"
					title="Google Map"></iframe>
			</div>
		</div>
	);
};

export default MapEmbed;
