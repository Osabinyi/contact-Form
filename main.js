// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBX6zYpdtndcFbx7UweO5neYJ46T1tDYAw",
    authDomain: "formsubmit-14e8c.firebaseapp.com",
    databaseURL: "https://formsubmit-14e8c.firebaseio.com",
    projectId: "formsubmit-14e8c",
    storageBucket: "formsubmit-14e8c.appspot.com",
    messagingSenderId: "982005004652",
    appId: "1:982005004652:web:8f0370a6cfdd960383db49",
    measurementId: "G-W3STD1CNMH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

//refence messages collections

const messageRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('formSubmit').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

   //get values
   const name = getInputVal('name'); 
   const company = getInputVal('company'); 
   const email = getInputVal('email'); 
   const phone = getInputVal('phone'); 
   const message = getInputVal('message'); 
  
   //save message
   saveMessage(name,company,email,phone,message);

   //show alert
   document.querySelector('alert').style.display = 'block';

   //hide alert after 3 seconds
   setTimeout(function(){
    document.querySelector('alert').style.display = 'none';
   },3000);

   //clear form
   document.getElementById('formSubmit').reset();
}

//function get document values
function getInputVal(id){
    return document.getElementById(id).value;
}
//save message to firebase
function saveMessage(name, company, email, phone, message){
    const newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}