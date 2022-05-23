var mainContent = document.querySelector('#page-content') //page content
var quizInstruction = document.querySelector('.quiz-instruction-wrapper') //quiz instruction //section
var questionAnswerContent = document.querySelector('.question-answer-wrapper') //question answer container
var quizHeading = document.querySelector('.heading-quiz') //h2 quiz heading
var quizDescription = document.querySelector('.quiz-description') //quiz -description
var containerQuestion = document.querySelector('.question-container') //div - question
var containerAnswer = document.querySelector('.answer-container') //div - answer options
var startButton = document.querySelector('.btn-start-quiz')
var resultContainer = document.querySelector('.result-container') //section - display result
var finalScoreContainer = document.querySelector('.final-score-container') //div - final score display
var initialsContainer = document.querySelector('.initials-container') //div - initials submit container
var questionIdCounter = 0
var totalScore = 0
var quesAnsObj = {
  Q1:
    'Which of the following function of String object extracts a section of a string and returns a new string?',
  Q1Ans: ['1. slice()', '2. split()', '3. replace()', '4. search()'], //1 - correct
  Q2:
    'Which of the following function of Number object returns a string value version of the current number?',
  Q2Ans: [
    '1. toPrecision',
    '2. toFixed()',
    '3. toLocaleString()',
    '4. toString()', //correct
  ],
  Q3:
    'Which of the following function of Number object returns the number value?',
  Q3Ans: [
    '1. toString()',
    '2. valueOf()', //correct
    '3. toLocaleString()',
    '4. toPrecision()',
  ],

  Q4: 'Which of the following code creates an object?',
  Q4Ans: [
    '1. var book = Object()',
    '2. var book = new Object()', //correct
    '3. var book = new OBJECT()',
    '4. var book = new Book()',
  ],
  Q5:
    'Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?',

  Q5Ans: [
    '1. concat()',
    '2. every()',
    '3. filter()', //correct
    '4. some()',
  ],

  finalMesg: 'All Done !!',
}

var arrCorrectAnswer = [
  '1. slice()',
  '4. toString()',
  '2. valueOf()',
  '2. var book = new Object()',
  '3. filter()',
]

var createQuestionAnswerEl = function (
  questionIdCounter,
  quesAnsObj,
  totalScore,
) {
  var questionContent = document.createElement('h2')
  questionContent.className = 'question-quiz' //h2
  var answerListContent = document.createElement('ul')
  answerListContent.className = 'answers-list' //ul

  switch (questionIdCounter) {
    case 0:
      questionContent.textContent = quesAnsObj.Q1
      questionContent.setAttribute('data-qa-id', questionIdCounter)
      for (var i = 0; i < quesAnsObj.Q1Ans.length; i++) {
        var listAnswerEl = document.createElement('li') //li
        listAnswerEl.className = 'answer' // <li class =""></li>

        //add qa id as a custom attribute
        answerListContent.setAttribute('data-qa-id', questionIdCounter)
        listAnswerEl.setAttribute('data-qa-id', questionIdCounter)

        listAnswerEl.setAttribute('data-val', quesAnsObj.Q1Ans[i])
        listAnswerEl.textContent = quesAnsObj.Q1Ans[i]
        answerListContent.appendChild(listAnswerEl)
      }
      break
    case 1:
      questionContent.textContent = quesAnsObj.Q2
      questionContent.setAttribute('data-qa-id', questionIdCounter)
      for (var i = 0; i < quesAnsObj.Q2Ans.length; i++) {
        var listAnswerEl = document.createElement('li') //li
        listAnswerEl.className = 'answer' // <li class =""></li>
        listAnswerEl.setAttribute('data-val', quesAnsObj.Q2Ans[i])
        //add qa id as a custom attribute
        answerListContent.setAttribute('data-qa-id', questionIdCounter)
        listAnswerEl.setAttribute('data-qa-id', questionIdCounter)
        listAnswerEl.textContent = quesAnsObj.Q2Ans[i]
        answerListContent.appendChild(listAnswerEl)
      }
      break
    case 2:
      questionContent.textContent = quesAnsObj.Q3
      questionContent.setAttribute('data-qa-id', questionIdCounter)
      for (var i = 0; i < quesAnsObj.Q3Ans.length; i++) {
        var listAnswerEl = document.createElement('li') //li
        listAnswerEl.className = 'answer' // <li class =""></li>
        listAnswerEl.setAttribute('data-val', quesAnsObj.Q3Ans[i])
        //add qa id as a custom attribute
        answerListContent.setAttribute('data-qa-id', questionIdCounter)
        listAnswerEl.setAttribute('data-qa-id', questionIdCounter)
        listAnswerEl.textContent = quesAnsObj.Q3Ans[i]
        answerListContent.appendChild(listAnswerEl)
      }
      break
    case 3:
      questionContent.textContent = quesAnsObj.Q4
      questionContent.setAttribute('data-qa-id', questionIdCounter)
      for (var i = 0; i < quesAnsObj.Q4Ans.length; i++) {
        var listAnswerEl = document.createElement('li') //li
        listAnswerEl.className = 'answer' // <li class =""></li>
        listAnswerEl.setAttribute('data-val', quesAnsObj.Q4Ans[i])
        //add qa id as a custom attribute
        answerListContent.setAttribute('data-qa-id', questionIdCounter)
        listAnswerEl.setAttribute('data-qa-id', questionIdCounter)
        listAnswerEl.textContent = quesAnsObj.Q4Ans[i]
        answerListContent.appendChild(listAnswerEl)
      }
      break
    case 4:
      questionContent.textContent = quesAnsObj.Q5
      questionContent.setAttribute('data-qa-id', questionIdCounter)
      for (var i = 0; i < quesAnsObj.Q5Ans.length; i++) {
        var listAnswerEl = document.createElement('li') //li
        listAnswerEl.className = 'answer' // <li class =""></li>
        listAnswerEl.setAttribute('data-val', quesAnsObj.Q5Ans[i])
        //add qa id as a custom attribute
        answerListContent.setAttribute('data-qa-id', questionIdCounter)
        listAnswerEl.setAttribute('data-qa-id', questionIdCounter)
        listAnswerEl.textContent = quesAnsObj.Q5Ans[i]
        answerListContent.appendChild(listAnswerEl)
      }
      break
    case 5:
      var finalScoreHeading = document.createElement('h2')
      finalScoreHeading.className = 'test-completed-heading'
      finalScoreHeading.textContent = quesAnsObj.finalMesg
      finalScoreContainer.appendChild(finalScoreHeading)
      var finalScoreContent = document.createElement('p')
      finalScoreContent.className = 'final-score'
      finalScoreContent.textContent = 'Your Final Score is : '
      var displayTotalScore = document.createElement('span')
      displayTotalScore.className = 'total-score'
      displayTotalScore.textContent = totalScore
      finalScoreContent.appendChild(displayTotalScore)
      finalScoreContainer.appendChild(finalScoreContent)
      var initialLabel = document.createElement('label')
      initialLabel.className = 'initials-label'
      initialLabel.textContent = 'Enter Your Initials :'
      initialsContainer.appendChild(initialLabel)
      var inputInitials = document.createElement('input')
      inputInitials.className = 'enter-initials'
      inputInitials.setAttribute('type', 'text')
      inputInitials.setAttribute('placeholder', 'Enter your initial....')
      initialsContainer.appendChild(inputInitials)
      var btnSubmit = document.createElement('button')
      btnSubmit.className = 'btn-submit'
      btnSubmit.textContent = 'Submit'
      initialsContainer.appendChild(btnSubmit)
  }
  containerQuestion.appendChild(questionContent)
  containerAnswer.appendChild(answerListContent)
  questionIdCounter++
}

var quizAnswerHandler = function (event) {
  var targetEl = event.target

  if (targetEl.matches('.answer')) {
    var questionIdCounter = targetEl.getAttribute('data-qa-id')
    var question = document.querySelector(
      ".question-quiz[data-qa-id='" + questionIdCounter + "']",
    )
    var answerList = document.querySelector(
      ".answers-list[data-qa-id='" + questionIdCounter + "']",
    )

    //collect total Score
    var choice = targetEl.getAttribute('data-val')
    if (arrCorrectAnswer.includes(choice)) {
      //adding score of 5 for correct answer
      totalScore += 5
    }

    question.remove()
    answerList.remove()
    questionIdCounter++

    createQuestionAnswerEl(questionIdCounter, quesAnsObj, totalScore)

    //writing the display result code

    if (
      document.querySelector(".display-result[data-val='result']") !=
        undefined ||
      document.querySelector(".display-result[data-val='result']") != null
    ) {
      document.querySelector(".display-result[data-val='result']").remove()
    }
    var displayResultEl = document.createElement('div') //div
    displayResultEl.className = 'display-result'
    if (arrCorrectAnswer.includes(choice)) {
      displayResultEl.textContent = 'Correct !!'
    } else {
      displayResultEl.textContent = 'Wrong !!'
    }

    displayResultEl.setAttribute('data-val', 'result')
    resultContainer.appendChild(displayResultEl)
  }
}

var quizButtonHandler = function (event) {
  var targetEl = event.target

  //start button was clicked
  if (targetEl.matches('.btn-start-quiz')) {
    quizInstruction.remove()
    createQuestionAnswerEl(questionIdCounter, quesAnsObj)
  }
}
containerAnswer.addEventListener('click', quizAnswerHandler)
startButton.addEventListener('click', quizButtonHandler)
