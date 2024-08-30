import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/Copyright";
import SignImage from "../../pages/Account/signin.jpg";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Account.css";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [successMessage, setSuccessMessage] = useState(""); // State for success notification
	const [errorMessage, setErrorMessage] = useState(""); // State for error notification

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			setSuccessMessage("Account successfully created!"); // Set success message
			setErrorMessage(""); // Clear any previous error message
		} catch (err) {
			setErrorMessage("Failed to create an account. Please try again."); // Set error message
			setSuccessMessage(""); // Clear success message in case of error
			console.log(err);
		}
	};

	return (
		<>
			<Hero backgroundImage={SignImage}>
				<h2>Sign Up</h2>
				<p>Welcome! Please create your Account</p>
			</Hero>

			<section className="container">
				<div className="signin-card">
					{/* Display success or error message */}
					{successMessage && (
						<p className="success-message">{successMessage}</p>
					)}
					{errorMessage && <p className="error-message">{errorMessage}</p>}

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
							Sign Up
						</button>
					</form>
					<p>
						Already Have an Account?
						<a href="./SignIn"> Sign In</a>
					</p>
				</div>
			</section>
			<Footer />
			<Copyright />
		</>
	);
};

export default SignUp;
