var mainContent = document.querySelector('#page-content') //page content
var quizInstruction = document.querySelector('quiz-instruction-wrapper') //quiz instruction //section
var quizHeading = document.querySelector('.heading-quiz') //h2 quiz heading
var quizDescription = document.querySelector('.quiz-description') //quiz -description
var questionAnswerContent = document.querySelector('.question-answer-wrapper') //section
var questionContent = document.querySelector('.question-quiz') //h2
var answerListContent = document.querySelector('.answers-list') //ul

var createQuestionAnswerEl = function () {
  var paraQuestionEl = document.querySelector('p')
  var listAnswerEl = document.querySelector('li')

  listAnswerEl.className = 'answer'
}

var quizEventHandler = function (event) {
  var questionsObj = {
    Q1:
      'Which of the following is true about variable naming conventions in JavaScript?',
    Q2:
      'Which built-in method combines the text of two strings and returns a new string?',
  }

  var answerObj = {
    Q1A1: 'append()',
    Q1A2: 'concat()',
    Q1A3: 'attach()',
    Q1A4: 'None of the above',
  }
}

quizQuestions.addEventListener('click', quizEventHandler)
