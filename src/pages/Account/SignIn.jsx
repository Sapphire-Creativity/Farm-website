import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/Copyright";
import SignImage from "../../pages/Account/signin.jpg";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Account.css";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [showNotification, setShowNotification] = useState(false); // State to control animation

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setSuccessMessage("Login successful!");
			setErrorMessage("");
			setShowNotification(true); // Show notification
		} catch (err) {
			setErrorMessage(
				"Failed to sign in. Please check your credentials and try again."
			);
			setSuccessMessage("");
			setShowNotification(true); // Show notification
			console.log(err);
		}
	};

	// Hide notification after 3 seconds
	useEffect(() => {
		if (showNotification) {
			const timer = setTimeout(() => setShowNotification(false), 3000);
			return () => clearTimeout(timer);
		}
	}, [showNotification]);

	return (
		<>
			<Hero backgroundImage={SignImage}>
				<h2>Sign In</h2>
				<p>Welcome! Please sign in to your Account</p>
			</Hero>

			<section className="container">
				<div className="signin-card">
					{/* Display success or error message with animation */}
					{successMessage && (
						<p
							className={`success-message ${
								showNotification ? "show-message" : ""
							}`}>
							{successMessage}
						</p>
					)}
					{errorMessage && (
						<p
							className={`error-message ${
								showNotification ? "show-message" : ""
							}`}>
							{errorMessage}
						</p>
					)}

					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button className="btn" type="submit">
							Sign In
						</button>
					</form>
					<p>
						Don't Have an Account?
						<a href="./SignUp"> Sign up</a>
					</p>
				</div>
			</section>

			<Footer />
			<Copyright />
		</>
	);
};

export default SignIn;
