var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice" + randomnumber1 + ".png";
var image1 = "images/" + randomImage1;
var dom=document.querySelectorAll("img")[0];
dom.setAttribute("src",image1);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomnumber2 + ".png";
var image2 = "images/" + randomImage2;
var dom=document.querySelectorAll("img")[1];
dom.setAttribute("src",image2);

if (randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "player1 wins!";
}
else if (randomnumber2 > randomnumber1){
  document.querySelector("h1").innerHTML= "player 2 wins";
}
else{
  document.querySelector("h1").innerHTML= "draw";
}
