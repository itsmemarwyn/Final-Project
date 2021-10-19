window.load=quizStart();

function quizStart(){
    document.querySelector(".quiz-start").classList.add("show")
}

function start(){
    window.location.replace("quiz.html");
}