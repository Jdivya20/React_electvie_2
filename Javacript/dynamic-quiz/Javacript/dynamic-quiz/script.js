document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("#name").innerHTML= localStorage.getItem("name")
    document.querySelector("#roll").innerHTML= localStorage.getItem("roll")
    // document.querySelector("#score").innerHTML=localStorage.getItem("score")
    
    getdata();
});


var sec = 15;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.querySelector('#time').innerHTML = sec + "secs left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
        ques_display='score: <span id = "score" >'+localStorage.getItem("score")+'</span>'
        document.querySelector("#questions").innerHTML=ques_display
        // alert("Time out!! :(");
    }
}


var questions=null;
var curent_question=0;
function getdata(){
    var xhttp=new XMLHttpRequest();
    xhttp.open("GET","https://raw.githubusercontent.com/Jdivya20/React_js_week-1/master/Javacript/dynamic-quiz/questions.json",true);
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
             questions=JSON.parse(this.responseText);
            next_ques()
            // score()
        }
    };
    xhttp.send();
}
function next_ques(){
    console.log(questions)
    question=questions[curent_question]
    var ques_display="<form id='quiz'>"+
    "<div>Q"+(curent_question)+" "+question.question+"</div>";
    question.options.forEach((options,ind)=>{
ques_display=ques_display+"<input id='ques' type='radio' value='"+options+"' name='"+(curent_question)+"'/>"+options+"<br>"
    });
    
    ques_display=ques_display+"<div><button id='btn' onclick='score();endquiz();' type='submit'>Next</button></div>"
    ques_display=ques_display+"</form>"
    // var btn=document.querySelector("#btn")
    document.querySelector("#questions").innerHTML=ques_display
    curent_question+=1
}
function endquiz(){
    console.log(curent_question)
    console.log(questions.length)
    console.log(sec)
    if(curent_question==questions.length){
        ques_display='score: <span id = "score" >'+localStorage.getItem("score")+'</span>'
        document.querySelector("#questions").innerHTML=ques_display
        // document.querySelector("#questions").innerHTML=localStorage.getItem("score")
        // document.querySelector("#questions").innerHTML=ques_display
    }
    else
        next_ques()
}
// document.addEventListener('DOMContentLoaded',function(){
// document.querySelector("#btn").addEventListener= function(){
//     var count=JSON.parse(localStorage.getItem("score"))
//     let ans= document.querySelector('input[id="ques"]:checked').value;
//     console.log(ans)
//     if(ans==question.answer){
//         count+=1
//     }
//     localStorage.setItem("score",count)
// };
// });
function score(){
    var count=JSON.parse(localStorage.getItem("score"))
    console.log(count)
    let ans= document.querySelector('input[id="ques"]:checked').value;
    console.log(ans)
    if(ans==question.answer){
        count+=1
    }
    localStorage.setItem("score",count)
}

