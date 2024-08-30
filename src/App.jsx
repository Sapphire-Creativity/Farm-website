import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Navbar from "./components/navbar/Navbar";
import "./lazyLoadingAnimation.css";

// Lazy loading your page components
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Services = lazy(() => import("./pages/services/Services"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const SignIn = lazy(() => import("./pages/Account/SignIn"));
const SignUp = lazy(() => import("./pages/Account/SignUp"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

// Loading animation component
const Loading = () => (
	<div className="loading-animation">
		<div className="spinner"></div>{" "}
		{/* Customize this with your desired animation */}
		Loading...
	</div>
);

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			{/* Suspense wraps the routes and shows the loading animation while loading */}
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="services" element={<Services />} />
					<Route path="shop" element={<Shop />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="contact" element={<Contact />} />
					<Route path="SignIn" element={<SignIn />} />
					<Route path="SignUp" element={<SignUp />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
