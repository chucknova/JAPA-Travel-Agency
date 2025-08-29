import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyCpzXbFwpeHOBprUTFnvxp-0NvSjlIeuRg",
    authDomain: "japa-269a4.firebaseapp.com",
    projectId: "japa-269a4",
    storageBucket: "japa-269a4.firebasestorage.app",
    messagingSenderId: "736749113389",
    appId: "1:736749113389:web:886266a10a7b32f5ae28a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// data.js - External data fetching module

// Export the async function to get data from Firebase
export async function getTravelPackages() {
    try {
        const querySnapshot = await db.collection("travel-packages").get();
        const travelPackages = [];

        querySnapshot.forEach((doc) => {
            const packageData = doc.data();
            packageData.id = doc.id; // Save ID with data
            travelPackages.push(packageData);
        });

        console.log("All travel packages:", travelPackages);

        // Save to localStorage for quick access later
        localStorage.setItem("travelPackage", JSON.stringify(travelPackages));

        return travelPackages;

    } catch (error) {
        console.error("Error getting documents: ", error);
        throw error; // Re-throw to let the calling code handle the error
    }
}