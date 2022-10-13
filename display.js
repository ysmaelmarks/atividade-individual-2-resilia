function display() {
  var x = document.getElementById("inputnumber");
  var verifyCifra = document.getElementById("cifra").selected;
  var verifyBase64 = document.getElementById("base64").selected;


  if(verifyCifra == true){
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("increase").style.display = "block";      
    } else {
      x.style.display = "block";
      document.getElementById("increase").style.display = "block"
    }
  }if(verifyBase64 == true){
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("increase").style.display = "none";
    } else {
      x.style.display = "none";
      document.getElementById("increase").style.display = "none"
    }
  }



}
