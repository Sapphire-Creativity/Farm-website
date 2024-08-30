// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB4mw26j_fY2aWKSrcbxgJfhzTZ-esQwGs",
	authDomain: "authentication-d6c02.firebaseapp.com",
	projectId: "authentication-d6c02",
	storageBucket: "authentication-d6c02.appspot.com",
	messagingSenderId: "192391087567",
	appId: "1:192391087567:web:e9f8645d3dd0f58faefeba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}
