var feedback;

function sendmsg(){
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    const emailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneformat = /^\+?[1-9][0-9]{7,14}$/;
  if(message == "" || phone == "" || email == ""){
      alert("You left at least one portion blank");
      return;
  }  
  if (!emailformat.test(email))
  {
    alert("Email is not in the right format");
    return;
  }
  if (!phoneformat.test(phone))
  {
    alert("Phone number is not in the right format");
    return;
  }
  feedback = "Email Address: " + email + "\nPhone Number: " + phone + "\nMessage: " + message;
  document.location.href = "mailto:smithr25@rpi.edu?subject="
    + encodeURIComponent("Robo Grow Message")
    + "&body=" + encodeURIComponent(feedback) 
  ;

  document.getElementById("form").style.display = "none";
  document.getElementById("submitted").style.display = "block";
}



