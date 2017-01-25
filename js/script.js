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
  
  var width = e.offsetWidth;
  var firststep = 30;
  var steplength = (width - firststep)/4;
  
  setTimeout(function(){e.className += " animal-highlight"}, 400);
  setTimeout(function(){e.style.marginLeft = (current + firststep) + "px"}, 500);
  
  [525, 550, 575, 600].forEach(function(seconds, i){
    setTimeout(function(){e.style.marginLeft = (current + firststep + (i+1)*steplength) + "px"}, seconds);
  })
  
  setTimeout(function(){e.classList.remove("animal-highlight")}, 700);
}

function currentLeftMargin(e){
  var cstyle = window.getComputedStyle(e).marginLeft;	
  return parseInt(cstyle);
}
