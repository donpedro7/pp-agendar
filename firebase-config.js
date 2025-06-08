



// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyCwg0A65-J0x6ewX33ytTJCYuX00Ynk-jE",
  authDomain: "ppagendar-agenda.firebaseapp.com",
  databaseURL: "https://ppagendar-agenda-default-rtdb.firebaseio.com",
  projectId: "ppagendar-agenda",
  storageBucket: "ppagendar-agenda.appspot.com",
  messagingSenderId: "397020542382",
  appId: "1:397020542382:web:0e07267cdc445112ef043f",
  measurementId: "G-G0CC0VKNDP"
};

firebase.initializeApp(firebaseConfig);


// Referencias globales (usadas en tus scripts HTML)
const auth = firebase.auth();
const database = firebaseConfig.database();
const storage = firebaseConfig.storage();