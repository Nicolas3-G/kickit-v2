import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0NaDAnhizxEzXOdxF7Epn36iX9q5cVII",
    authDomain: "kickit-bc7e5.firebaseapp.com",
    projectId: "kickit-bc7e5",
    storageBucket: "kickit-bc7e5.appspot.com",
    messagingSenderId: "802096769001",
    appId: "1:802096769001:web:7759e491cbd382bb5e4d78",
    measurementId: "G-NETFNFMF22"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function POST(req) {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    console.log("running route")
    return new Response("Request Received")
}