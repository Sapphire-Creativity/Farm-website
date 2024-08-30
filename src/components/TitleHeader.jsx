const TitleHeader = ({ Subtitle, Title, className }) => {
	return (
		<div className={`title-header ${className}`}>
			<h3>{Subtitle}</h3>
			<h2>{Title}</h2>
		</div>
	);
};

export default TitleHeader;
