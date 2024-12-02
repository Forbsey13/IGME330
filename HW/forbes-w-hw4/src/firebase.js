import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, runTransaction } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

let app;

export const initApp = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDbUBasEGqxCgoca2IzkrjEAuLhjkScBXQ",
        authDomain: "forbes-w-hw4.firebaseapp.com",
        projectId: "forbes-w-hw4",
        storageBucket: "forbes-w-hw4.firebasestorage.app",
        messagingSenderId: "1079526434067",
        appId: "1:1079526434067:web:5bb63b33db5e0d6978a6e6",
        measurementId: "G-3T1WJH1GJE"
      };

    app = initializeApp(firebaseConfig);
};

export const retrieveParkData = () => {
    const db = getDatabase(app);
    const likesRef = ref(db, 'park');

    return likesRef;
};

export const updateLikeCount = (parkId, increment = true) => {
    const db = getDatabase(app);
    const likeRef = ref(db, `park/${parkId}`);

    // https://modularfirebase.web.app/reference/database.runtransaction
    // runTransaction is a better set so i used it instead of set from your demo
    runTransaction(likeRef, (currentLikes) => {
        if (currentLikes === null) {
            return increment ? 1 : 0;
        }
        return increment ? currentLikes + 1 : Math.max(0, currentLikes - 1);
    });
};