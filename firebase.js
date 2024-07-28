
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCqpGt77dhmRDcG3Yc6wQIwIpkwrALlbI",
  authDomain: "food-app-66f2f.firebaseapp.com",
  projectId: "food-app-66f2f",
  storageBucket: "food-app-66f2f.appspot.com",
  messagingSenderId: "498526731209",
  appId: "1:498526731209:web:a0002e7f8ca42ac01bc618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD_t2iQ9oELXHl09rXTFfqeBbcJd4s2Yk4",
//   authDomain: "fullstackfooddel.firebaseapp.com",
//   projectId: "fullstackfooddel",
//   storageBucket: "fullstackfooddel.appspot.com",
//   messagingSenderId: "664442208054",
//   appId: "1:664442208054:web:2991c3d32863a05c41fd97",
//   measurementId: "G-85ESY6GJ4F"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app); 