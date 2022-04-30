import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBaTLcbICI22pGlaR6Psd6V4zGOFKIpRL0",
  authDomain: "ecommerce-8b869.firebaseapp.com",
  projectId: "ecommerce-8b869",
  storageBucket: "ecommerce-8b869.appspot.com",
  messagingSenderId: "163709299076",
  appId: "1:163709299076:web:79ce0f03b79b970bb155d1",
  measurementId: "G-XJBF240KB1",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;

// firebase.auth().onAuthStateChanged((authUser) => {
//   authUser
//     ? localStorage.setItem("authUserFirebase", JSON.stringify(authUser))
//     : localStorage.removeItem("authUserFirebase");
// });
