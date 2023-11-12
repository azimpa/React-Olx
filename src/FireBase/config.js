import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
import {getStorage}  from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCPETIYrGVEpOktqaN1jhJk83NhS0zvjDo",
  authDomain: "sample-34e97.firebaseapp.com",
  projectId: "sample-34e97",
  storageBucket: "sample-34e97.appspot.com",
  messagingSenderId: "1022869763127",
  appId: "1:1022869763127:web:44975d86c86f651283fbb2",
  measurementId: "G-ZMJNEWZTYW"
};

const Firebase = initializeApp(firebaseConfig)

export const db = getFirestore(Firebase)
export const storage = getStorage(Firebase)