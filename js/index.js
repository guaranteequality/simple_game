var score = 0;
var color = "blue";

function random(min,max){
 	return Math.round(Math.random() * (max-min) + min);
}

function setBG(){
  if (Math.round(Math.random())){
    return "img/1.jpg";
  } else {
    return "img/2.jpg";
  }
}



function dropBox(){
  var length = random(100, ($(".game").width() - 100));
  var velocity = random(850, 10000);
  var size = random(50, 150);
  var thisBox = $("<div/>", {
    class: "box",
    style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
  });
  
 
  thisBox.data("test", Math.round(Math.random()));
  if(thisBox.data("test")){
    thisBox.css({"background": "url('img/1.jpg')", "background-size":"contain"});
  } else {
    thisBox.css({"background": "url('img/2.jpg')", "background-size":"contain"});
  }
  
  

  $(".game").append(thisBox);
  

  setTimeout(function(){
    thisBox.addClass("move");
  }, random(0, 5000) );
  

  thisBox.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    $(this).remove();
  });
}

for (i = 0; i < 10; i++) { 
  dropBox();
}

$(document).on('click', '.box', function(){

  
  if($(this).data("test")){
    score += 1;
  } else {
    score -= 1;
  }
  
  $(".score").html(score);
  $(this).remove();
});

var runGame = setInterval(function(){
                for (i = 0; i < 10; i++) { 
                  dropBox();
                }  
              }, 5000);

function countdown() {
    	var seconds =61;
	    function tick() {
	        var counter = document.getElementById("counter");
	        seconds--;
	        counter.innerHTML = (seconds < 10 ? "0" : "")  + String(seconds) + "S";
	        if( seconds > 0 ) {
	            setTimeout(tick, 1000);
	            draw();
	   			update();
	        } else {
	            alert("congratulations !");
	            clearInterval(runGame);
	        }
	    }
    	tick();
	}

countdown();