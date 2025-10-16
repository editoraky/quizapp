let quiz-questions = [
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

let currentQuestion = 0;

function init() {
	document.getElementById("all-questions").innerHTML = quiz-questions.length;
	showCurrentQuestion();
}

function showCurrentQuestion() {
	let question = quiz-questions[currentQuestion];

	document.getElementById("questiontext").innerHTML = question["question"];
	document.getElementById("answer-1").innerHTML = question["answer-1"];
	document.getElementById("answer-2").innerHTML = question["answer-2"];
	document.getElementById("answer-3").innerHTML = question["answer-3"];
	document.getElementById("answer-4").innerHTML = question["answer-4"];
}

function answer(selection) {
	let question = quiz-questions[currentQuestion];
	console.log("Selected answer is ", selection);
	let selectedQuestionNumber = selection.slice(-1);
	console.log("selectedQuestionNumber is ", selectedQuestionNumber);
  console.log("Current question is ", question["right-answer"]);
  
  let idOfRightAnswer = `answer-${question["right-answer"]}`;

	if (selectedQuestionNumber == question["right-answer"]) {
		console.log("Bravo! Das war richtig.");
		document.getElementById(selection).parentNode.classList.add("bg-success");
	} else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
  }
  
  document.getElementById("next-button").disabled = false;
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