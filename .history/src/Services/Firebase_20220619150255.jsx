import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCB4Udl5NXMCovuqpnsksfTdZbbEPie83k",
  authDomain: "crud-lista-c0213.firebaseapp.com",
  projectId: "crud-lista-c0213",
  storageBucket: "crud-lista-c0213.appspot.com",
  messagingSenderId: "390772642614",
  appId: "1:390772642614:web:bdb03b08ea75a68c2b5997",
  measurementId: "G-R6T77N43GS"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);