
//alert("Hi");

function jsQuiz (questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

jsQuiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}

jsQuiz.prototype.getQuestionByIndex = function () {
    /*
    var question1 = this.questions[this.questionIndex];
    */
    return this.questions[this.questionIndex];
}

jsQuiz.prototype.checkOptionWithAnswer = function (ans) {
    if (this.getQuestionByIndex().isCorrectAnswer(ans)) {
        //increase the scores for every correct answer
        this.score++;
    }
    this.questionIndex++;
}

function jsQuestion(text, choices, answer)  {
    this.text = text;
    this.choices = choices;
    this. answer = answer;
}

jsQuestion.prototype.isCorrectAnswer = function (ans) {
    return this.answer === ans; 
}

//var q1 = new Question("JavaScript Supports ?",["Events", "Inheritence", "File Handling", "Polymorphism"],"Events")

var questions = [
    new jsQuestion("National Animal of India ?",["Tiger", "Lion", "Monkey", "Camel"],"Tiger"),
    new jsQuestion("Present Prime Minister of India ?",["Manmohan Singh", "Narendra Modi", "Indira Gandhi", "Rajendra Prasad"],"Narendra Modi"),
    new jsQuestion("When was SAARC formed ?",["1982", "1983", "1984", "1985"],"1985"),
    new jsQuestion("Largest Coffee producing state in India ?",["Kerala", "Goa", "Karnataka", "Bihar"],"Karnataka"),
    new jsQuestion("National Flower of India ?",["Lilly", "Lotus", "Sunflower", "All"],"Lotus")
];

//var quiz = new Quiz(questions);

function loadQuestions() {
    //alert("in load");
    if (quiz.isEnded()) {
        showScores();
    }
    else { 
        //displaying question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionByIndex().text;

        var choices = quiz.getQuestionByIndex().choices;
        for(var i = 0; i<choices.length; i++) {
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];   
        
            handleOptionButton("btn"+i, choices[i]) ;
        }

        showProgress();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var quizOver = "<h1>Results</h1>";
    quizOver += "<h2 id='score'>Your Scores "+quiz.score+ " and your Percentage is "+((quiz.score / questions.length) * 100) + "% </h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = quizOver;
};

function handleOptionButton(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.checkOptionWithAnswer(choice);
        
        loadQuestions();
    }    
};

var quiz = new jsQuiz(questions);

loadQuestions();

