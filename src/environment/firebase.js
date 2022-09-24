
/* import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
 */

/* const app = initializeApp(firebaseConfig);
export const firestore =getFirestore(app); 
*/

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
export const firebaseConfig = {
  apiKey: "AIzaSyCfybcLZKAzOVoUWqja8tQ0OLyUxwclhp8",
  authDomain: "react-1e229.firebaseapp.com",
  projectId: "react-1e229",
  storageBucket: "react-1e229.appspot.com",
  messagingSenderId: "279027756143",
  appId: "1:279027756143:web:d3d2afb1683ab92978f19a"
};
firebase.initializeApp(firebaseConfig)
export const db=firebase.firestore()
export const auth=firebase.auth()
export default firebase
// Initialize Firebase
