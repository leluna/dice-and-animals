	// unicode dice
var dice = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;' ];

function draw(state) {  
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  
  var pair = [die1, die2];
  
  pair.map(hide);

  var latestState = state[0];
  var result = latestState.dice;
    
  die1.innerHTML = dice[result[0]-1];
  die2.innerHTML = dice[result[1]-1];

  
  pair.map(show);

    
  var animal = document.getElementById(latestState.animal);
  move(animal);

  console.log(win(animal));
}

function hide(e){
  e.style.opacity = "0";
}

function show(e){
  setTimeout(function(){e.style.opacity = "1"}, 200);
}

function move(e) {
  disableButton(900);
  var current = currentLeftMargin(e);
  
  var width = e.offsetWidth;
  var firststep = 0.6*width;
  var steplength = 0.1*width;
  
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

function disableButton(end){
  var button = document.getElementById("roll-button");
  
  button.disabled = true;
  setTimeout(function(){button.disabled = false}, end);
}

function win(animal){
  var lane = document.getElementsByClassName("lane")[0];
  var lanestyle = window.getComputedStyle(lane)
  var lanewidth = parseInt(lanestyle.getPropertyValue("width"));
  var lanePaddingLeft = parseInt(lanestyle.getPropertyValue("padding-left"));
  return (currentLeftMargin(animal) + 2*animal.offsetWidth + lanePaddingLeft > lanewidth)
}
