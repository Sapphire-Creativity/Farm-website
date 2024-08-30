import Hero from "../../components/Hero/Hero";
import TitleHeader from "../../components/TitleHeader";
import notFoundImage from "../../pages/Account/signin.jpg";
import "./notFound.css";
const NotFound = () => {
	return (
		<>
			<Hero backgroundImage={notFoundImage}>
				<h2>Not Found</h2>
			</Hero>
			<TitleHeader Subtitle={"Opps"} Title={"The Page is unavailable"} />
		</>
	);
};

export default NotFound;
