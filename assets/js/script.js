var mainContent = document.querySelector('#page-content') //page content
var viewHighScore = document.querySelector('.view-score-container') //view high scores
var quizInstruction = document.querySelector('.quiz-instruction-container') //quiz instruction //div
var questionAnswerContent = document.querySelector('.question-answer-wrapper') //question answer container
var quizHeading = document.querySelector('.heading-quiz') //h2 quiz heading
var quizDescription = document.querySelector('.quiz-description') //quiz -description
var containerQuestion = document.querySelector('.question-container') //div - question
var containerAnswer = document.querySelector('.answer-container') //div - answer options
var startButton = document.querySelector('.btn-start-quiz')
var resultContainer = document.querySelector('.result-container') //section - display result
var finalScorePage = document.querySelector('.final-score-initial-container') //section - final score display
var finalScoreContainer = document.querySelector('.final-score-container') //div - final score display
var initialsContainer = document.querySelector('.initials-container') //div - initials submit container
var viewScoreList = document.querySelector('.view-high-score') // div//view the score list after submit button
var btnGoBackClearScore = document.querySelector(
  '.go-back-clear-score-container',
) //div//button go back & clear
var timer = document.querySelector('.time-interval') // timer
var questionIdCounter = 0
var totalScore = 0
var initScore = {}
var arrScore = []
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
var totalQuestions = 5
var totalTime = 100
var keyLocalStorage = 'SCORE'

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
    } else if (!arrCorrectAnswer.includes(choice)) {
      timer.textContent = 'Time Remaining :' + ' ' + totalTime
    }
  }

  question.remove()
  answerList.remove()
  questionIdCounter++

  createQuestionAnswerEl(questionIdCounter, quesAnsObj, totalScore)

  //writing the display result code
  if (
    document.querySelector(".display-result[data-val='result']") != undefined ||
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

var saveScore = function (key, highScore) {
  var existingEntries = JSON.parse(localStorage.getItem(key) || '[]') //if empty or existing string to arr
  existingEntries.push(highScore) // push new array to the existing array
  localStorage.setItem(key, JSON.stringify(existingEntries)) //save it into the local storage again
}

var loadLatestScore = function (key) {
  var loadScore = localStorage.getItem(key) //string format of array of objects

  if (!loadScore) {
    return false
  }
  var loadScoreArr = JSON.parse(loadScore) // converting the string format to array
  var arrLength = loadScoreArr.length //array length
  var arrLatestScore = loadScoreArr[arrLength - 1] //finding latest array inserted with index - find the values

  return arrLatestScore
}

var createTimeInterval = function () {
  timer.textContent = 'Time Remaining :' + ' ' + totalTime

  // set time
  var timeInterval = setInterval(mainTimer, 1000)
  function mainTimer() {
    totalTime--

    if (totalTime < 0) {
      timer.textContent = 'Time Remaining :' + ' ' + (totalTime + 1)
      clearInterval(timeInterval)
      var question = document.querySelector('.question-quiz')
      var answerList = document.querySelector('.answers-list')

      question.remove()
      answerList.remove()
      if (document.querySelector('.display-result') != null) {
        document.querySelector('.display-result').remove()
      }

      if (document.querySelector('.test-completed-heading') != null) {
        document.querySelector('.test-completed-heading').remove()
        document.querySelector('.final-score').remove()
        document.querySelector('.initials-label').remove()
        document.querySelector('.enter-initials').remove()
        document.querySelector('.btn-submit').remove()
      }
      createQuestionAnswerEl(totalQuestions, quesAnsObj, totalScore)
    }
  }
}

var createScoreListEl = function (arrLatestScore) {
  //create heading
  var headingHighScore = document.createElement('h2')
  headingHighScore.className = 'view-score-heading'
  headingHighScore.textContent = 'High Scores'
  viewScoreList.appendChild(headingHighScore)
  // create ordered list of score
  var orderListScore = document.createElement('ol')
  orderListScore.className = 'score-list'
  var scoreLine = document.createElement('li')
  scoreLine.className = 'initial-score'
  scoreLine.textContent =
    arrLatestScore.initial + ' ' + ' - ' + ' ' + arrLatestScore.score
  orderListScore.appendChild(scoreLine)
  viewScoreList.appendChild(orderListScore)
  //create go back button and clear score button
  var btnGoBack = document.createElement('button')
  btnGoBack.className = 'btn-go-back'
  btnGoBack.textContent = 'Go back'
  btnGoBackClearScore.appendChild(btnGoBack)
  //for now holding on to the clear button
  // var btnClearScore = document.createElement('button')
  // btnClearScore.className = 'btn-clear-score'
  // btnClearScore.textContent = 'Clear high score'
  // btnGoBackClearScore.appendChild(btnClearScore)
  if (document.querySelector('.time-interval') != null) {
    document.querySelector('.time-interval').remove()
  }
}
var quizButtonHandler = function (event) {
  var targetEl = event.target
  //start button was clicked
  if (
    targetEl.matches('.btn-start-quiz') ||
    targetEl.matches(".btn-start-quiz[data-val='start-quiz']")
  ) {
    //remove existing intro page
    document.querySelector(".heading-quiz[data-val='intro-heading']").remove()
    document.querySelector(".quiz-description[data-val='intro-desc']").remove()
    document.querySelector(".btn-start-quiz[data-val='start-quiz']").remove()
    //create new content - in this case it is question answer or final score page
    createQuestionAnswerEl(questionIdCounter, quesAnsObj, totalScore)
    //also start the timer
    createTimeInterval()
  }
}
var submitButtonHandler = function (event) {
  var targetEl = event.target
  if (targetEl.matches('.btn-submit')) {
    var finalScore = document.querySelector('.total-score').textContent
    var inputInitial = document.querySelector('.enter-initials').value

    var objInitScore = {
      initial: inputInitial,
      score: finalScore,
    }
    arrScore.push(objInitScore) //high score is a array and inserting the obj into the array

    saveScore(keyLocalStorage, arrScore) // key and value - value here is an array of object
    var arrLatestScore = loadLatestScore(keyLocalStorage) //loading the latest array inserted to the variable
    finalScoreContainer.remove()
    initialsContainer.remove()
    if (document.querySelector(".display-result[data-val='result']") != null) {
      document.querySelector(".display-result[data-val='result']").remove()
    }

    createScoreListEl(arrLatestScore[0]) //creating score list passing the array
  }
}

var createIntroSection = function () {
  //intro heading
  var introHeading = document.createElement('h2')
  introHeading.className = 'heading-quiz'
  introHeading.textContent = 'Coding Quiz Challenge'
  introHeading.setAttribute('data-val', 'intro-heading')
  quizInstruction.appendChild(introHeading)

  //intro description
  var introDescription = document.createElement('p')
  introDescription.className = 'quiz-description'
  introDescription.setAttribute('data-val', 'intro-desc')
  introDescription.textContent =
    'The test contains 5 questions and time limit is 50 seconds.You will get 5 point for each correct answer with maximum total of 25. At the end of the Quiz,your total score will be displayed and you can save the score by typing your initials in the textbox provided and clicking on submit button. You can view your highest score by clicking on the "View High Scores" link. Good Luck!!'
  quizInstruction.appendChild(introDescription)
  //start button
  var btnStart = document.createElement('button')
  btnStart.className = 'btn-start-quiz'
  btnStart.setAttribute('data-val', 'start-quiz')
  btnStart.textContent = 'Start Quiz'
  quizInstruction.appendChild(btnStart)
}

var goBackButtonHandler = function (event) {
  var targetEl = event.target
  if (targetEl.matches('.btn-go-back')) {
    viewScoreList.remove()
    btnGoBackClearScore.remove()
    createIntroSection()
    location.reload()
  }
}

var viewHighScoreHandler = function (event) {
  var targetEl = event.target
  if (targetEl.matches('.view-score')) {
    if (document.querySelector('.heading-quiz') != null) {
      document.querySelector('.heading-quiz').remove()
      document.querySelector('.quiz-description').remove()
      document.querySelector('.btn-start-quiz').remove()
    } else if (document.querySelector('.question-quiz') != null) {
      document.querySelector('.question-quiz').remove()
      document.querySelector('.answer-container').remove()
      if (document.querySelector('.display-result') != null) {
        document.querySelector('.display-result').remove()
      }
    } else if (document.querySelector('.test-completed-heading') != null) {
      document.querySelector('.test-completed-heading').remove()
      document.querySelector('.final-score').remove()
      if (document.querySelector('.display-result') != null) {
        document.querySelector('.display-result').remove()
      }
    }
    if (document.querySelector('.time-interval') != null) {
      document.querySelector('.time-interval').remove()
    }

    var arrLatestScore = loadLatestScore(keyLocalStorage)
    createScoreListEl(arrLatestScore[0])
  }
}
var removeResultDisplayHandler = function (event) {
  var targetEl = event.target
  if (targetEl.matches('.enter-initials')) {
    if (document.querySelector('.display-result') != null) {
      document.querySelector('.display-result').remove()
    }
  }
}
//textbox event handler - remove result
finalScorePage.addEventListener('click', removeResultDisplayHandler)
//event handlers
viewHighScore.addEventListener('click', viewHighScoreHandler)
//go back button handler
btnGoBackClearScore.addEventListener('click', goBackButtonHandler)
//score submit button handler
initialsContainer.addEventListener('click', submitButtonHandler)
//question and answer event handler
containerAnswer.addEventListener('click', quizAnswerHandler)
//start the quiz
startButton.addEventListener('click', quizButtonHandler)
