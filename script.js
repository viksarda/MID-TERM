
function submitQuiz() {
    if (!document.getElementById("check").checked) {
        alert("You must check the box")
    }
    else
    console.log('submitted');

    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);


        for (var i = 1, length = radiosNo.length; i < length; i++) {
               if (radiosNo[i].checked) {
                var answerValue = Number(radiosNo[i].value);
                localStorage.setItem("answerValue", answerValue);

            }
        }
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
        
    }

    var calcScore = (answerScore('q2') + answerScore('q3') + answerScore('q4'));
    console.log("CalcScore: " + calcScore); 

    function correctAnswer (correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber);
        return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
            (document.getElementById(correctStringNo).innerHTML) + "</strong>");
        }

    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }

    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 1, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

    var showScore = "Your Score: " + calcScore +"/" + questionCounter;
    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}

function store(){
    var input= document.getElementById("Surname");
    localStorage.setItem("Surname", input.value);
    var input= document.getElementById("Name");
    localStorage.setItem("Name", input.value);
    var input= document.getElementById("studentID");
    localStorage.setItem("studentID", input.value);
    var input= document.getElementById("Email").value;
    localStorage.setItem("Email", input);

   }


function validateForm() {
    var name = document.forms["myForm"]["Name"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    var surname = document.forms["myForm"]["Surname"].value;
    if (surname == "") {
      alert("Surname must be filled out");
      return false;
    }
    var email = document.forms["myForm"]["Email"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    var id = document.forms["myForm"]["studentID"].value;
    if (id == "") {
      alert("Student ID must be filled out");
      return false;
    }
  }