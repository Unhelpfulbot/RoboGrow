var feedback;

function getinput(){
  min_light = document.getElementById("sunlight").value;
  min_moisture = document.getElementById("moisture").value;

}

function sendrequest(){
  var email = document.getElementById("emailreq").value;
  var device = document.getElementById("device").value;
  var wifi = document.getElementById("wifi").value;
  var pass = document.getElementById("password").value;
  const emailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(device == ""|| email == ""|| wifi == ""|| pass == ""){
    alert("You left at least one portion blank");
    return;
} 
if (!emailformat.test(email))
  {
    alert("Email is not in the right format");
    return;
} 
  feedback = "Email Address: " + email + "\nDevice: " + device +"\nWifi SSID: " + wifi + "\nWifi Passowrd: " + pass;
  document.location.href = "mailto:smithr25@rpi.edu?subject="
    + encodeURIComponent("Robo Grow Request Access Form")
    + "&body=" + encodeURIComponent(feedback) 
  ;
  alert("Request has been sent");
  document.getElementById("emailreq").value = "";
  document.getElementById("device").value = "";
  document.getElementById("wifi").value = "";
  document.getElementById("password").value = "";
}

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



