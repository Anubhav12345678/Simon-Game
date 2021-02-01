var userClickedPattern = [];
var gamePattern= [];
var i=0;
var lvl=0;
var buttonColours = ["red","blue","green","yellow"];

$(document).keypress(function(){
	i++;
	if(i==1)
	{
		nextSequence();
			$("level-title").text("Level "+lvl);
			console.log("game started");
	}
});



$(".btn").click(function(){
  userChosenColour = $(this).attr("id");
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);
  animatepress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function playsound(name){
   var audio = new Audio("sounds/"+ name + ".mp3");
   audio.play();
}

function animatepress(curcolour){
   $("#"+curcolour).addClass("pressed");

   setTimeout(function(){
     $("#"+curcolour).removeClass("pressed");     
   }, 100);
}


function checkAnswer(curlvl)
{
   if(gamePattern[curlvl]===userClickedPattern[curlvl])
   {
   	console.log("success");
   	if(gamePattern.length===userClickedPattern.length)
   	{
   		setTimeout(function(){
   			nextSequence();
   		}, 1000);
   	}
   }
   else
   	{
   		var a = new Audio("sounds/wrong.mp3");
   		a.play();
   		console.log("0");
   		$("body").addClass("game-over");
   		$("#level-title").text("Game Over, Press Any Key to Restart");
   		
   		setTimeout(function(){
          $("body").removeClass("game-over");
   		},200);
        startOver();
   	}
}



function nextSequence(){
	userClickedPattern = [];
	lvl++;
	$("#level-title").text("Level "+lvl);		
	var x = Math.floor(Math.random()*4);
    randomChosenColour = buttonColours[x];
    gamePattern.push(randomChosenColour);
    // playsound(randomChosenColour);
	$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomChosenColour);
}

function startOver()
{
   i=0;
   lvl=0;
   gamePattern = new Array();
   // userClickedPattern = new Array();
   console.log("do again");

}
