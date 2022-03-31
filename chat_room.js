const firebaseConfig = {
    apiKey: "AIzaSyDimyjJgHKgLY37qxQq_ILxCvTZ71zNQOg",
    authDomain: "lets-chat-8bdb2.firebaseapp.com",
    databaseURL:"https://lets-chat-8bdb2-default-rtdb.firebaseio.com/",
    projectId: "lets-chat-8bdb2",
    storageBucket: "lets-chat-8bdb2.appspot.com",
    messagingSenderId: "294204223712",
    appId: "1:294204223712:web:cb33dbf4fa96d533daa085"
  };

  firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
    console.log(user_name);
document.getElementById("user_name").innerHTML="WELCOME "+user_name+"!"


function addroom(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      })
     localStorage.setItem("room_name",room_name)
     window.location="letschat_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
    console.log("room names-"+Room_names)
    row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'> #"+Room_names+" </div> <hr/>"
    document.getElementById("output").innerHTML+=row;

      });});}
getData();

function redirecttoroomname(name){
      console.log(name)
      localStorage.setItem("Room_name",name)
      window.location="letschat_page.html"
}

