// function 
function timeElapse() {
	startGameTime = new Date();
}

// Displays form when user clicks on "Start Quiz" button
function startQuiz() {
	document.getElementById("quiz-body").style.visibility = "visible";
	timeElapse();
}
function check() {
	// Avoids global contaminent of variabels
	"use strict";

	// Variables that measure time from "start-quiz" button to "Im done" button
	var stopGameTime = new Date();
	var reactionTime = stopGameTime - startGameTime;

	// Variables that handels questions in html form.
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var rightAnswers = 0;

	// array containg strings.
	var messages = ["Outstanding work!", "Mm could be better actually!", "You really need to do better you twat!"];
	var gifs = ["img/win.gif", "img/meh.webp", "img/loser.webp"];

	// Variable that is used to choose index in messages array depending on how many points user gets.
	var range;

	// If statement that checks if questions is answered correctly and adds 1 point if so.
	if(question1 === "Stockholm") {
		rightAnswers++;
	}
	if(question2 === "Dog") {
		rightAnswers++;
	}
	if(question3 === "Guns") {
		rightAnswers++;
	}
	if(question4 === "Cars"){
		rightAnswers++;
	}
	if(question5 === "FED") {
		rightAnswers++;
	}

	// if statement that checks how many correct answer and fetch indexed value from gifs array and messages array.
	if(rightAnswers <= 1){
		range = 2;
	}
	if(rightAnswers > 2 && rightAnswers < 4){
		range = 1;
	}
	if(rightAnswers > 4){
		range = 0;
	}
	
	// Shows all the correct answers after user has clicked Im finished button
	document.getElementById("after_submit").style.visibility = "visible";
	// Displays indexed value from message array.
	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + rightAnswers + " questions correct out 5!";
	document.getElementById("game-time").innerHTML = "Your time to complete the quiz is " + reactionTime/1000 + " seconds";
	document.getElementById("pictures").src = gifs[range];
}