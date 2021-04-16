// document.addEventListener("DOMContentLoaded",function(){
//     document.querySelector('#sname').onsubmit=fname

//         function fname(){
//             // const n=document.createElement('h1')
//             // var x =document.querySelector("#name").value
//             // console.log(x)
//             // h1.innerHTML=x
//             // document.querySelector('#name').value=''
//             // // document.querySelector('#h1').append(n)
//             var name = document.querySelector("#name").value;
//         var roll = document.querySelector("#roll").value;
      
//         localStorage.setItem("name",name)
//         localStorage.setItem("roll",roll)
       

//             // window.location.href="question1.html"
//             // return false
    
//     }
    
//     // document.getElementById("#h1").innerHTML= localStorage.getItem("roll")
//     // document.getElementById("#h1").innerHTML= localStorage.getItem("name")
// });
//     document.querySelector('#b1').onclick=nextQues1
//     var count=0
//     function nextQues1(){
//         var q1=document.quiz.answer1.value
//         if(q1=="Dhoni"){
//                   count++
//               }
//             //   console.log(count)
//             document.write(count)
//             }
//     document.querySelector('#b2').onclick=nextQues2
//     function nextQues2(){
//         var q2=document.quiz.answer2.value
//         if(q2=="3"){
//                 count++
//             }
//             document.write(count)
//         }
//     // document.querySelector('#b3').onclick=nextQues3
//     // document.querySelector('#b4').onclick=nextQues4
//     document.querySelector('#b5').onclick=nextQues5
//     // document.querySelector('#b1').onclick=nextQues

   
//     function nextQues5(){
//     //   var q1=document.quiz.answer1.value
//     //   var q2=document.quiz.answer2.value
//     //   var q3=document.quiz.answer3.value
//     //   var q4=document.quiz.answer4.value
//       var q5=document.quiz.answer5.value
//     //   console.log(q1)
//     //   if(q1=="Dhoni"){
//     //       count++
//     //   }
//     //   if(q2=="3"){
//     //     count++
//     // }
//     // if(q3=="Mahendra singh Dhoni"){
//     //     count++
//     // }
//     // if(q4=="Yellow"){
//     //     count++
//     // }
//     if(q5=="Chennai"){
//         count++
//     }
// document.write(count)
//     }


document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("name").innerHTML= localStorage.getItem("name")
    document.getElementById("roll").innerHTML= localStorage.getItem("roll")
    document.querySelector("#score").innerHTML=localStorage.getItem("score")
});

document.addEventListener('DOMContentLoaded',function(){
document.querySelector("#quiz").onsubmit = function(){
   console.log(document.getElementById("quiz").value);
  let value= document.querySelector('input[name="answer1"]:checked').value;  
  console.log(value);
  localStorage.setItem("q1",value)
  let correctAnswers=['Dhoni','3','Mahendra singh Dhoni','Yellow','Chennai'] ;
  var qu=document.quiz.answer1.value
  var count=JSON.parse(localStorage.getItem("score"))
  for(let i= 0 ; i <= correctAnswers.length ; i++){
    if (qu==correctAnswers[i]){
      count+=1
      // localStorage.setItem("score",count++)
    }
    localStorage.setItem("score",count)
  }
  if(count==5){
    document.querySelector("#msg").innerHTML="Congrats you are a true fan"
}
};
});
