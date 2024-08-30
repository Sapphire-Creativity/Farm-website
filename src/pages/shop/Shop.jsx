import "./shop.css";
import CustomCursor from "../../components/CustomCursor/CustomCursor";

import Hero from "../../components/Hero/Hero";
import ShopBanner from "../../assets/shop-images/Shop-banner.jpg";
const Shop = () => {
	return (
		<div>
			<CustomCursor />
			<Hero backgroundImage={ShopBanner}>
				<h2>Shop</h2>
				<p>From Our Fields to Your Table: Pure, Fresh, and Locally Grown</p>
			</Hero>
			<section>
				<h2>This Page is Coming Soon</h2>
			</section>
		</div>
	);
};

export default Shop;
