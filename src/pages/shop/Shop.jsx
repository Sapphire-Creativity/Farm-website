import "./shop.css";
import CustomCursor from "../../components/CustomCursor/CustomCursor";

import Hero from "../../components/Hero/Hero";
import ShopBanner from "../../assets/shop-images/Shop-banner.jpg";
import TitleHeader from "../../components/TitleHeader";
const Shop = () => {
	return (
		<div>
			<CustomCursor />
			<Hero backgroundImage={ShopBanner}>
				<h2>Shop</h2>
				<p>From Our Fields to Your Table: Pure, Fresh, and Locally Grown</p>
			</Hero>

			<TitleHeader Subtitle={"Check back later"} Title={"Page Coming Soon!"} />
		</div>
	);
};

export default Shop;
