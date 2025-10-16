let quiz_questions = [
	{
		"question": "In which century was Shakespeare born?",
		"answer_1": "15th century",
		"answer_2": "16th century",
		"answer_3": "17th century",
		"answer_4": "14th century",
		"right_answer": 2,
	},
	{
		"question": "Who wrote the novel 'The Trial'?",
		"answer_1": "Thomas Mann",
		"answer_2": "Franz Kafka",
		"answer_3": "Hermann Hesse",
		"answer_4": "Bertolt Brecht",
		"right_answer": 2,
	},
	{
		"question":
			"Which literary device involves giving human characteristics to non-human things?",
		"answer_1": "Metaphor",
		"answer_2": "Simile",
		"answer_3": "Personification",
		"answer_4": "Alliteration",
		"right_answer": 3,
	},
];

let currentQuestion = 0;

function init() {
	document.getElementById("all_questions").innerHTML = quiz_questions.length;
	showCurrentQuestion();
}

function showCurrentQuestion() {
	let question = quiz_questions[currentQuestion];

	document.getElementById("questiontext").innerHTML = question["question"];
	document.getElementById("answer_1").innerHTML = question["answer_1"];
	document.getElementById("answer_2").innerHTML = question["answer_2"];
	document.getElementById("answer_3").innerHTML = question["answer_3"];
	document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
	let question = quiz_questions[currentQuestion];
	console.log("Selected answer is ", selection);
	let selectedQuestionNumber = selection.slice(-1);
	console.log("selectedQuestionNumber is ", selectedQuestionNumber);
  console.log("Current question is ", question["right_answer"]);
  
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

	if (selectedQuestionNumber == question["right_answer"]) {
		console.log("Bravo! Das war richtig.");
		document.getElementById(selection).parentNode.classList.add("bg-success");
	} else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
  }
  
  document.getElementById("next_button").disabled = false;
}
 

function nextQuestion() {
  currentQuestion++;  //Hier wird die derzeitige Frage um eins erhöht
  showCurrentQuestion();

  document.getElementById("next_button").disabled = true;
  document.getElementById(selection).parentNode.classList.add("bg-success").disabled = true;
  document.getElementById(selection).parentNode.classList.add("bg-danger").disabled = true;
  document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success").disabled = true;

}