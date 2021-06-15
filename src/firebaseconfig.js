import firebase from "firebase";



 var firebaseConfig = {
    apiKey: "AIzaSyB2rF_SjDnS-ukg3l-AQEUsYlZMYH2AZk8",
    authDomain: "react-crud-project-c00c5.firebaseapp.com",
    databaseURL: "https://react-crud-project-c00c5-default-rtdb.firebaseio.com",
    projectId: "react-crud-project-c00c5",
    storageBucket: "react-crud-project-c00c5.appspot.com",
    messagingSenderId: "107830022033",
    appId: "1:107830022033:web:6031674d5c7bd1e8ff1430",
    measurementId: "G-7DRNBC9FFS"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();