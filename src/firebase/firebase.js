import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
apiKey: "AIzaSyBG2R4GfTr2ENQE-Nb8SBC1rJdI7uYLblk",
authDomain: "backendimports.firebaseapp.com",
projectId: "backendimports",
storageBucket: "backendimports.appspot.com",
messagingSenderId: "789081965365",
appId: "1:789081965365:web:e5fa39d983dcd34eaf027c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)
