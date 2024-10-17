const questions = [
    {
        content: "Câu hỏi 1: Đông Lào là nước nào ?",
        answers: [
            "A.Việt Nam",
            "B.Lào",
            "C.Philipine",
            "D.Indonesia"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 2: Tây Lào là nước nào",
        answers: [
            "A.Miến Điện",
            "B.Ấn Độ",
            "C.Nepal",
            "D.Thái Lan"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 3: Nam Lào là nước nào",
        answers: [
            "A.Campuchia",
            "B.Malaysia",
            "C.Singapore",
            "D.Việt Nam"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 4: Bắc Lào là nước nào",
        answers: [
            "A.Trung Quốc",
            "B.Hàn Quốc",
            "C.Nhật Bản",
            "D.Hoa Kỳ"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 5: Lào có bao nhiêu tỉnh thành",
        answers: [
            "A.14",
            "B.15",
            "C.16",
            "D.17"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 6: Đâu là thủ đô của Lào",
        answers: [
            "A.Hà Nội",
            "B.Bangkok",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 7: Lào có biển không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 8: Lào có sân bay quốc tế không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 9: Lào có biên giới với Việt Nam không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 10: Thủ đô của Brueni là gì",
        answers: [
            "A.Bangkok",
            "B.Bandar Seri Begawan",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 1
    }
];


const scoreElement = document.getElementById('score');
const questionElement = document.getElementsByClassName('question')[0];
const answersElement = document.getElementsByClassName('answers')[0];
let scoreIndex = 0;
let questionIndex = 0;

function displayQuestion() {
    const currentQuestion = questions[questionIndex];
    questionElement.textContent = currentQuestion.content;
    const currentAnswer = Array.from(answersElement.children);
    currentAnswer.forEach((item, index) => {
        item.textContent = currentQuestion.answers[index];
        item.classList.remove('correct-answer', 'wrong_answer');
        item.style.pointerEvents = 'auto';
    });

}

answersElement.addEventListener('click', (event) => {
    if(questionIndex >= questions.length) return;
    const currentQuestion = questions[questionIndex];
    const eventAnswer = event.target.getAttribute('answer-index');
    if (currentQuestion.correctAnswer == eventAnswer) {
        event.target.style.pointerEvents = 'none';
        event.target.classList.add('correct-answer')
        scoreIndex++;
    }
    else {
        event.target.style.pointerEvents = 'none';
       
        answersElement.children[currentQuestion.correctAnswer].classList.add('correct-answer');
        event.target.classList.add('wrong_answer');
    }
    scoreElement.textContent = scoreIndex;

    setTimeout(() => {
        questionIndex++;
        if (questionIndex < questions.length) {
            document.getElementsByClassName('display_result')[0].style.display = 'none'

            displayQuestion();

        }
        else {
           document.getElementsByClassName('display_result')[0].style.display = 'block';
           document.getElementsByClassName('display_questions')[0].style.display = 'none';
           document.getElementById('result').textContent = scoreIndex;
           

        }
    }, 500)


});

displayQuestion();