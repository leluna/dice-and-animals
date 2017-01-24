// unicode dice
var dice = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;' ];

function draw(state) {
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  
  var pair = [die1, die2];
  
  pair.map(hide);

    var latest = state[0];
    var result = latest.dice;
    
  die1.innerHTML = dice[result[0]-1];
    die2.innerHTML = dice[result[1]-1];

  
  pair.map(show);

    
    var animal = document.getElementById(latest.animal);
    move(animal);
}

function hide(e){
  e.style.opacity = "0";
}

function show(e){
  setTimeout(function(){e.style.opacity = "1"}, 200);
}

function move(e) {
  var current = currentLeftMargin(e);
  
    setTimeout(function(){e.className += " animal-highlight"}, 1000);
  setTimeout(function(){e.style.marginLeft = (current + 30) + "px"}, 1500);
  setTimeout(function(){e.style.marginLeft = (current + 35) + "px"}, 1550);
  setTimeout(function(){e.style.marginLeft = (current + 40) + "px"}, 1600);
  setTimeout(function(){e.style.marginLeft = (current + 45) + "px"}, 1650);
  setTimeout(function(){e.style.marginLeft = (current + 50) + "px"}, 1700);
  setTimeout(function(){e.classList.remove("animal-highlight")}, 1900);
}

function currentLeftMargin(e){
  var cstyle = window.getComputedStyle(e).marginLeft;	
  return parseInt(cstyle);
}
