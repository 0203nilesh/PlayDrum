var add= './sounds/';
// const music=['crash.mp3', 'kick-bass.mp3', 'snare.mp3', 'tom-1.mp3', 'tom-2.mp3', 'tom-3.mp3', 'tom-4.mp3'];

  for(var i=0; i<7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML= this.innerHTML;
        soundPlay(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    })
}

document.querySelector("#click").addEventListener("click", ()=>{
    for(var ind=6; ind>=0; ind--){
        document.querySelectorAll(".drum")[ind].click();
    }
})

document.addEventListener('keypress', (event)=>{
    // console.log(event.key);
    soundPlay(event.key);
    addAnimation(event.key);
})

function soundPlay(char){
    switch(char){
        case "w":
            var tom_1= new Audio("./sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "a":
            var tom_2= new Audio("./sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "s":
            var tom_3= new Audio("./sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "d":
            var tom_4= new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            break;
        case "j":
            var snare= new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash= new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass= new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log("Not found any response");
    }
}

function addAnimation(currentKey){
    // console.log("I a minside");
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+currentKey).classList.remove("pressed");
    }, 100);
}