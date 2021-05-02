var score=localStorage.getItem("score");
function scoreget(){
   document.getElementById("score").innerHTML=score;
}
function back(){
   window.location="activity_1.html";
}