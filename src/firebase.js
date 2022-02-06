import firebase from "firebase";


// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBMVVt0OfqH5qgvrW3l9XBnUo2AsXdPOUU",
  authDomain: "disneyplus-clone-34d11.firebaseapp.com",
  projectId: "disneyplus-clone-34d11",
  storageBucket: "disneyplus-clone-34d11.appspot.com",
  messagingSenderId: "670980080134",
  appId: "1:670980080134:web:5b313dc51d33367267f987",
  measurementId: "G-LJ6LKLFDY3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
