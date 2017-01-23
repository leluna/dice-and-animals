// unicode dice
var dice = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;' ];

function draw(states) {
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  
  var pair = [die1, die2];
  
  pair.map(hide);
 
  die1.innerHTML = dice[states[0]];
  die2.innerHTML = dice[states[1]];
  
  pair.map(show);
  
  var lion = document.getElementById("lion");
  move(lion);
}

function hide(e){
  e.style.opacity = "0";
}

function show(e){
  setTimeout(function(){e.style.opacity = "1"}, 200);
}

function move(e) {
  var current = currentLeftMargin(e);
  
  setTimeout(function(){lion.className += " animal-highlight"}, 1000);
  setTimeout(function(){lion.style.marginLeft = (current + 30) + "px"}, 1500);
  setTimeout(function(){lion.style.marginLeft = (current + 35) + "px"}, 1550);
  setTimeout(function(){lion.style.marginLeft = (current + 40) + "px"}, 1600);
  setTimeout(function(){lion.style.marginLeft = (current + 45) + "px"}, 1650);
  setTimeout(function(){lion.style.marginLeft = (current + 50) + "px"}, 1700);
  setTimeout(function(){lion.classList.remove("animal-highlight")}, 1900);
}

function currentLeftMargin(e){
  var cstyle = window.getComputedStyle(e).marginLeft;	
  return parseInt(cstyle);
}