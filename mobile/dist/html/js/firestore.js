// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAt8SxakHO2Ybs2SS8gmJLbUSxIDPozYFA",
    authDomain: "mericxyz.firebaseapp.com",
    databaseURL: "https://mericxyz.firebaseio.com",
    projectId: "mericxyz",
    storageBucket: "mericxyz.appspot.com",
    messagingSenderId: "1081628045199",
    appId: "1:1081628045199:web:bd3b9ea26f4ce74d8ca5fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var firestore = firebase.firestore();

  // Start grabbing DOM Elements
  const submitBtn = document.querySelector('#submit');

  let fullname = document.querySelector('#name');
  let email = document.querySelector('#email');
  let subject = document.querySelector('#subject');
  let message = document.querySelector('#message');

  const db = firestore.collection("contactform");

  submitBtn.addEventListener('click', function() {
      let fullnameinput = fullname.value;
      let emailinput = email.value;
      let subjectinput = subject.value;
      let messageinput = message.value;
      let timeinput = firebase.firestore.Timestamp.now();

      // Access the Database
      db.doc().set({
          name: fullnameinput,
          email: emailinput,
          subject: subjectinput,
          message: messageinput,
          time: timeinput
      })
      .then(function(){
          console.log("Data successfully sent.")
      })
      .catch(function(error) {
          console.log("Error!")
      })
  });