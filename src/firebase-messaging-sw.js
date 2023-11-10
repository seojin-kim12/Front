// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
import { getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCifBeoiP8ve9BXxdWOJQ8efZ2UcRNTbY",
    authDomain: "bver-bf6b9.firebaseapp.com",
    projectId: "bver-bf6b9",
    storageBucket: "bver-bf6b9.appspot.com",
    messagingSenderId: "181926995997",
    appId: "1:181926995997:web:3e98e34872a2e45ef6fef4",
    measurementId: "G-Q6EXQSJB9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
getToken(messaging, { vapidKey: "BI5UQ-fntJzfljenuSZAAebAzt4lagE83h4Is_wOG6WuErXyvGjH4TFw_pzQUHQo1vAXDGfD6iuAVjlbpyIzn84" }).then((currentToken) => {
    if (currentToken) {
        console.log("Got FCM device token:", currentToken);
    } else {
        console.log("No registration token available. Request permission to generate one.");
    }
});

// self.addEventListener("push", (e) => {
//     const options = {
//         body: e.data.text(),
//         icon: "path/to/icon.png", // 알림에 표시할 아이콘
//     };

//     e.waitUntil(
//         self.registration.showNotification("Push Notification", options)
//     );
// });
