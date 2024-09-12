const all = document.getElementById("all");
const dispaly = document.getElementById("dispaly");
const noques = document.querySelector(".no-of-count");
const btn = document.getElementById("btn");
const time = document.getElementById("time");
const h = document.getElementById('h')
var pos= 0;
var cor=0;
//var choose; 
const questions = [
    ["How many heading tag are there ?",6,7,8,"a"],
    ["What does HTML stands for?","Hypertext Machine language.","Hypertext links markup language.","Hypertext Markup Language.","c"],
    ["Which of the following HTML Elements is used for making any text bold ?","p","b","em","b"],
    ["Which of the following HTML element is used for creating an unordered list?","li","ul","dl","b"],
    ["Which of the following HTML element is used for creating an ordered list?","ui","ol","dl","b"]  
];

function dis(){
if(pos < questions.length){
    dispaly.innerHTML=` <p class="h5">${questions[pos][0]}</p>`;
    dispaly.innerHTML+=`<input type="radio" name="select" value="a" class="form-check-input m-2"><label>${questions[pos][1]}</label><br>`;
    dispaly.innerHTML+=`<input type="radio" name="select" value="b" class="form-check-input m-2"><label>${questions[pos][2]}</label><br>`;
    dispaly.innerHTML+=`<input type="radio" name="select" value="c" class="form-check-input m-2"><label>${questions[pos][3]}</label><br>`;
    noques.innerHTML=`${pos+1} of ${questions.length} Question`;
    h.innerHTML=`<h1>Start the Quiz</h1>`   
}else{
all.innerHTML=`Quiz Completed <br>`;
all.innerHTML+=`<h4> you got ${cor} of ${questions.length}.</h4>`;
all.innerHTML+=`<button class="btn btn-info mt-2" onclick="restart()">Restart</button>`;
h.innerHTML=`<h1>Quiz End</h1>`; 
}
}
btn.addEventListener("click",()=>{
var c;
choose = document.getElementsByName("select");
for(var i=0;i<choose.length;i++){
   if(choose[i].checked){
     c=choose[i].value;
   }
}
if(c==questions[pos][4]){
    cor++;
}
pos++;
dis();

})

function restart(){
    window.location.reload(true);
}
var s=60;
setTimeout(()=>{
function run(){
    if(s==0){
        window.location.reload(true);
    }else{
        time.innerHTML=`Time : ${s--}sec`;
        time.style.color="green";
    }  
}
setInterval(run,1000);
},1000)

dis();

