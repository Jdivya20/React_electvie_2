document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("#name").innerHTML= localStorage.getItem("name")
    document.querySelector("#roll").innerHTML= localStorage.getItem("roll")
    // document.querySelector("#score").innerHTML=localStorage.getItem("score")
    
    getdata();
});


var sec =30;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.querySelector('#time').innerHTML = sec;
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
        ques_display='<p class="final" style="text-align:center">score: <span id = "score" >'+localStorage.getItem("score")+'</span></p>'
        ques_display=ques_display+"<div><button id='btn' class='btn btn-danger'onclick='play_again()'type='submit'>Play again</button></div>"
        document.querySelector("#questions").innerHTML=ques_display
        // alert("Time out!! :(");
    }
}


var questions=null;
var curent_question=0;
function getdata(){
    var xhttp=new XMLHttpRequest();
    xhttp.open("GET","https://raw.githubusercontent.com/Jdivya20/React_electvie_2/master/Javacript/dynamic-quiz/questions.json",true);
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
    "<div class='final'>Q"+(curent_question)+" "+question.question+"</div>";
    question.options.forEach((options,ind)=>{
ques_display=ques_display+"<p><input id='ques' type='radio' value='"+options+"' name='"+(curent_question)+"'/>"+options+"</p><br>"
    });
    
    ques_display=ques_display+"<div><button id='btn' class='btn btn-danger'onclick='score();endquiz();' type='submit'>Next</button></div>"
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
        ques_display='<p class="final" style="text-align:center">score: <span id = "score" >'+localStorage.getItem("score")+'</span></p><br>'
        ques_display=ques_display+"<div><button id='btn' class='btn btn-danger'onclick='play_again()'type='submit'>Play again</button></div>"
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
function play_again(){
    location.href = 'index.html';
    // localStorage.setItem("score",0)
  }
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

