document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#drum").onclick=alert1
    function alert1(){
        alert("Welcome");
    }
document.querySelector("#b1").onclick=bass

var x =document.querySelector("#bass")
function bass(){
    x.play();
}
document.querySelector("#b2").onclick=function(){
    document.querySelector("#tom1").play()
}
document.querySelector("#b3").onclick=function(){
    document.querySelector("#tom2").play()
}
document.querySelector("#b4").onclick=function(){
    document.querySelector("#floor").play()
}
document.querySelector("#b5").onclick=function(){
    document.querySelector("#snare").play()
}
document.querySelector("#b6").onclick=function(){
    document.querySelector("#hats").play()
}

});