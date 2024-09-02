import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBllEJqxw1aBVGuxRsp8fPzMfFTz24eSqI",
  authDomain: "ecommerce-fee72.firebaseapp.com",
  projectId: "ecommerce-fee72",
  storageBucket: "ecommerce-fee72.appspot.com",
  messagingSenderId: "192393020616",
  appId: "1:192393020616:web:e4aa63eae3899fea9bd1fd"
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);