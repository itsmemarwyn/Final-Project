var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
        questions:[
            {
                q:'In _____, the cryptographic algorithms and secrets are sent with the message.',
                options: ['IPSec', 'SSL', 'TLS', 'PGP'],
                answer:4
            },
            {
                q:'_____ refers to the physical arrangement of a network.',
                options: ['Topology', 'Mode of operation', 'Data flow', 'None of the above'],
                answer:1
            },    
            {
                q:'A ______ is a data communication system spanning states, countries, or the whole world.',
                options: ['MAN', 'WAN', 'LAN', 'PAN'],
                answer:2
            },   
            {
                q:'A _____ connection provides a dedicated link between two devices.',
                options: ['primary', 'multi-point', 'point-to-point', 'secondary'],
                answer:3
            },
            {
                q:'Which topology requires a multi-point connection?',
                options: ['Bus', 'Star', 'Mesh', 'Ring'],
                answer:1
            }            
        ],
        
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                ul.style.display="none";
                nextButton.style.display="none";
                quizOver();
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.score + " out of " + this.questions.length;
        }
}


window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}

function quizOver(){
    document.querySelector(".quiz-over").classList.add("show")
}

function tryAgain(){
    window.location.replace("index.html");
}

