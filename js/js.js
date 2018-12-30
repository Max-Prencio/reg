
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBLpNspLIayAhuIypjm4opyEaP0IUbLMtk",
    authDomain: "maxuel-1.firebaseapp.com",
    databaseURL: "https://maxuel-1.firebaseio.com",
    projectId: "maxuel-1",
    storageBucket: "maxuel-1.appspot.com",
    messagingSenderId: "209174178053"
  };
  firebase.initializeApp(config);

function compra(){
    var user = firebase.auth().currentUser;

if (user) {
    location.href="formulario de pago.html";
  // User is signed in.
} else {
    alert("no estas logeado");
    alert("redirecionaando");
    location.href="acceder.html";
  // No user is signed in.
}
}
function aler(){
    alert("solicitud enviada");
    location.href="catalogo.html";
}

function ini() {
    var email=document.getElementById("email").value;
   var  password=document.getElementById("pass").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        alert("conectado");
        location.href="catalogo.html";
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
}
function des(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        alert("saliendo");
        location.href="./html.html";
      }).catch(function(error) {
        // An error happened.
      });
}
function reg(){
    var email=document.getElementById("email").value;
   var  password=document.getElementById("pass").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        alert("usuario resgistrado");
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
}
/*
<script src="https://www.gstatic.com/firebasejs/5.7.2/firebase.js"></script>
  <script src="js/js.js"></script>
  */