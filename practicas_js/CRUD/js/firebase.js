// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc , getDocs, onSnapshot, deleteDoc, doc ,getDoc,  updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpY7aNRECOIFSrjHP78XWQGyx59fM8txg",
    authDomain: "crud-js-test.firebaseapp.com",
    projectId: "crud-js-test",
    storageBucket: "crud-js-test.appspot.com",
    messagingSenderId: "761741708005",
    appId: "1:761741708005:web:496cfe018fc6380553e20c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const saveTask = (title,description) => addDoc(collection(db, "tareas"), { title, description }); 


export const getTasks = () => getDocs(collection(db, "tareas"));

export const getTask = (id) => getDoc(doc(db ,"tareas" ,id))

export const onGetTasks = (callback) => onSnapshot(collection(db,"tareas"),callback);

export const deleteTask = (id) =>  deleteDoc(doc(db,"tareas",id));

export const updateTask = (id, newFields) => updateDoc(doc(db, "tareas", id), newFields);