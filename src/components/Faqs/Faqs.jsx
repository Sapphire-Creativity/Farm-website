import React, { useState } from "react";
import "./Faqs.css";
import { faqs } from "../../data";
import TitleHeader from "../TitleHeader";
import { FaChevronDown } from "react-icons/fa6";

const Faqs = () => {
	const [expandedId, setExpandedId] = useState(null);

	const handleToggle = (id) => {
		setExpandedId((prevId) => (prevId === id ? null : id));
	};

	return (
		<section className="container">
			<TitleHeader Subtitle={"FAQS"} Title={"Frequently Asked Questions"} />
			<div className="faq-container">
				{faqs.map(({ id, question, answer }) => (
					<div key={id} className="faq-section">
						<div className="question-faq" onClick={() => handleToggle(id)}>
							<h3 className="question">{question}</h3>
							<FaChevronDown
								className={`question-icon ${expandedId === id ? "rotate" : ""}`}
							/>
						</div>

						<div
							className={`answer-faq ${
								expandedId === id ? "show-faq" : "hide-faq"
							}`}>
							<p className="answer">{answer}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Faqs;
