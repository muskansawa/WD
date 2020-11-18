var rando1 = Math.floor(Math.random()*6)+1;
var roll = "images/dice"+rando1+".png";
document.querySelectorAll("img")[0].setAttribute("src",roll);
var rando2 = Math.floor(Math.random()*6)+1;
roll = "images/dice"+rando2+".png";
document.querySelectorAll("img")[1].setAttribute("src",roll);

if(rando1>rando2)
document.querySelector("h1").innerHTML = " Player 1 wins !"
else if(rando2>rando1)
document.querySelector("h1").innerHTML = " player 2 wins !"
else {
  document.querySelector("h1").innerHTML = " Draw :)"
}
