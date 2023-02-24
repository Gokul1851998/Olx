import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'  
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD8_pSlzVrRT5XX8ROSbKutfeyBU43cxts",
  authDomain: "fir-9aac5.firebaseapp.com",
  projectId: "fir-9aac5",
  storageBucket: "fir-9aac5.appspot.com",
  messagingSenderId: "156027564727",
  appId: "1:156027564727:web:db9aab966c663eca9c9332",
  measurementId: "G-3QEMRW5HH7"
};

 export default firebase.initializeApp(firebaseConfig)