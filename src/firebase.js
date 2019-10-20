import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCBNsAWJdgZm4iS1XrkZg-aq0pXS-U0R2M",
  authDomain: "todo-d7f98.firebaseapp.com",
  databaseURL: "https://todo-d7f98.firebaseio.com",
  projectId: "todo-d7f98",
  storageBucket: "todo-d7f98.appspot.com",
  messagingSenderId: "174641323471",
  appId: "1:174641323471:web:a71bc85e844078943186ba",
  measurementId: "G-JEW9CHBH87"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
