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
  }
  
];


let currentQuestion = 0;

function init() {
  document.getElementsById("all_questions").innerHTML = quiz_questions.length;
  showCurrentQuestion();
}

function showCurrentQuestion() {
  

  let question = quiz_questions[currentQuestion];

  document.getElementById("questiontext").innerHTML = question['question'];
  document.getElementById("answer_1").innerHTML = answer["answer_1"];
  document.getElementById("answer_2").innerHTML = answer["answer_2"];
  document.getElementById("answer_3").innerHTML = answer["answer_3"];
  document.getElementById("answer_4").innerHTML = answer["answer_4"];
  
}
