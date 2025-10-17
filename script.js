let quizQuestions = [
	{
		"question": "In which century was Shakespeare born?",
		"answer-1": "15th century",
		"answer-2": "16th century",
		"answer-3": "17th century",
		"answer-4": "14th century",
		"right-answer": 2,
	},
	{
		"question": "Who wrote the novel 'The Trial'?",
		"answer-1": "Thomas Mann",
		"answer-2": "Franz Kafka",
		"answer-3": "Hermann Hesse",
		"answer-4": "Bertolt Brecht",
		"right-answer": 2,
	},
	{
		"question":
			"Which literary device involves giving human characteristics to non-human things?",
		"answer-1": "Metaphor",
		"answer-2": "Simile",
		"answer-3": "Personification",
		"answer-4": "Alliteration",
		"right-answer": 3,
	},
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio("./assets/audio/success.mp3");
let AUDIO_FAIL = new Audio("./assets/audio/fail.mp3");
let AUDIO_WON = new Audio("./assets/audio/winning.mp3")

function init() {
	document.getElementById("all-questions").innerHTML = quizQuestions.length;
	showCurrentQuestion();
}

function showCurrentQuestion() {

  if (gameIsOver()) {
	  showEndscreen();  
  } else {
	  updateProgressBar();
	  updateToNextQuestion();
  }		
}

function gameIsOver() {
	return currentQuestion >= quizQuestions.length;
}

function showEndscreen() {
	//shows endscreen
	document.getElementById("endScreen").style = "";
	document.getElementById("questionBody").style = "display: none";

	document.getElementById("amount-of-questions").innerHTML =
		quizQuestions.length;
	document.getElementById("amount-of-right-questions").innerHTML =
		rightQuestions;
	document.getElementById("header-image").src = "./assets/img/trophy-gold.png";
	AUDIO_WON.play();
}

function updateProgressBar() {
	let percent = (currentQuestion + 1) / quizQuestions.length;
	percent = Math.round(percent * 100);

	document.getElementById("progress-bar").innerHTML = `${percent} %`;
	document.getElementById("progress-bar").style = `width: ${percent}%`;
}


function updateToNextQuestion() {
	
	let question = quizQuestions[currentQuestion];

	document.getElementById(
		"question-status"
	).innerHTML = `<b id="question-status">${currentQuestion + 1}</b>`;

	document.getElementById("questiontext").innerHTML = question["question"];
	document.getElementById("answer-1").innerHTML = question["answer-1"];
	document.getElementById("answer-2").innerHTML = question["answer-2"];
	document.getElementById("answer-3").innerHTML = question["answer-3"];
	document.getElementById("answer-4").innerHTML = question["answer-4"];

}



function answer(selection) {
	let question = quizQuestions[currentQuestion];
	console.log("Selected answer is ", selection);
	let selectedQuestionNumber = selection.slice(-1);
	console.log("selectedQuestionNumber is ", selectedQuestionNumber);
  console.log("Current question is ", question["right-answer"]);
  
  let idOfRightAnswer = `answer-${question["right-answer"]}`;

	if (rightAnswerSelected(selectedQuestionNumber)) {  // Richtig beantwortet, dann true
		console.log("Bravo! Das war richtig.");
		document.getElementById(selection).parentNode.classList.add("bg-success");
		AUDIO_SUCCESS.play();
    	rightQuestions++;
	} else {
    	document.getElementById(selection).parentNode.classList.add("bg-danger");
		document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
		AUDIO_FAIL.play();
  }
  
  document.getElementById("next-button").disabled = false;
}
 
function rightAnswerSelected() {
	return selectedQuestionNumber == question["right-answer"];
}

function nextQuestion() {
  currentQuestion++;  //Hier wird die derzeitige Frage um eins erhöht
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showCurrentQuestion();


}

function resetAnswerButtons() {

  document.getElementById("answer-1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer-1").parentNode.classList.remove("bg-success");
  document.getElementById("answer-2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer-2").parentNode.classList.remove("bg-success");
  document.getElementById("answer-3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer-3").parentNode.classList.remove("bg-success");
  document.getElementById("answer-4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer-4").parentNode.classList.remove("bg-success");
}

function restartGame() {
	document.getElementById("header-image").src = "./assets/img/school-supplies-quiz.jpg";
	document.getElementById("questionBody").style = ""; //questionBody wieder anzeigen
	document.getElementById("endScreen").style = "display: none"; // Endscreen ausblenden

	rightQuestions = 0;
	currentQuestion = 0;
	init();
}