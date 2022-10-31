// mouse click
for (var i = 0; i<document.querySelectorAll(".drum").length ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
makesound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
  });}


// keyboard click
  document.addEventListener("keypress",function(even){
    makesound(even.key);
    buttonAnimation(buttonInnerHTML);
// function of the sound
  });
  function makesound(k){
    switch (k) {
      case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
        case "a":
        var punda = new Audio("sounds/kick-bass.mp3");
        punda.play();
        break;

        case "s":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;

        case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;


      default:console.log("buttonInnerHTML")

    }
  }


function buttonAnimation(keys){
var animation=  document.querySelector("."+keys);
animation.classList.add("pressed");
setTimeout(function(){
  animation.classList.remove("pressed");
},100)
}
