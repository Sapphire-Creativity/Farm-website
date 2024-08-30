import "./shop.css";
import CustomCursor from "../../components/CustomCursor/CustomCursor";
import TitleHeader from "../../components/TitleHeader";
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
		</div>
	);
};

export default Shop;
