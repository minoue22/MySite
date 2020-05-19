"use strict";
var mainPage = document.getElementById("main");

function showURL(f){
	
    mainPage.innerHTML  = '<iframe  src= "' + f +  '"></iframe>';
  

}

var biography=
'<p>I am currently a student of Tokyo University and have a experience of a job placement at Shirucafe, which provides free study space and free drinks for students who visit this cafe and gives them variety of opportunities to interact with commpanies. I worked as a vice store manager.</p>'+
'<h2>Aspirations</h2>'+
'<p>My aspirations are to prevail the importance of UI design in Japan</p>'+
'<h2>Web Scripting</h2>'+
'<p>Application development which helps girls travell alone</p>'+
'<h2>Skills</h2>'+
'<p><ul>Programming languages including Java, JavaScript,HTML.</ul><ul>Statistical analysis using R, Excel.</ul>'+
'<h2>Experiences</h2>';

var i;

for(i=1; i<21; i++){
	biography+= '<p class = "exps">Paragraph' + i + '</p>';
}

