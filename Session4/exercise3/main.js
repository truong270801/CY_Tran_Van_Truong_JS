const questions = [
    {
        content: 'Sông nào chảy qua Hà Nội',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/MatnuocSongHong-06112008333.JPG',
        correctAnswer: 'Sông Hồng',
        maxShowingCharacter: 2
    },
    {
        content: 'Ai là người phát minh ra bóng đèn sợi đốt',
        image: 'https://st.quantrimang.com/photos/image/2016/10/25/thomsa-edison-4.jpg',
        correctAnswer: 'Edison',
        maxShowingCharacter: 3
    },
    {
        content: 'Nguời giàu nhất thế giới ',
        image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455',
        correctAnswer: 'Jezz Bezos',
        maxShowingCharacter: 2
    },
    {
        content: 'Thủ đô của Belarus',
        image: '',
        correctAnswer: 'Minsk',
        maxShowingCharacter: 3
    }
];

const notificationElement = document.getElementsByClassName('notification')[0];
const questionElement = document.getElementsByClassName('question')[0];
const answerElement = document.getElementsByClassName('answer')[0];
const imageElement = document.getElementsByTagName('img')[0];
const buttonElement = document.querySelector('button');

let questionIndex = 0;
let currentAnswer;
let maxClickCount;


function displayQuestion() {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault()
    })
    const currentQuestion = questions[questionIndex];
    questionElement.textContent = currentQuestion.content;
    imageElement.src = currentQuestion.image;
    maxClickCount = currentQuestion.maxShowingCharacter;
    document.getElementById('show_key').textContent = maxClickCount;
    answerElement.innerHTML = '';
    document.querySelector('input').value = '';
    currentAnswer = Array.from(currentQuestion.correctAnswer);
    console.log(currentAnswer)
    currentAnswer.forEach(item => {
        const li = document.createElement('li');
        answerElement.appendChild(li);
        li.addEventListener('click', () => {
            if (0 < maxClickCount) {
                li.textContent = item;
                maxClickCount--;
                console.log(maxClickCount)
                document.getElementById('show_key').textContent = maxClickCount;
            }
            else {
                alert("Vượt quá số lần mở ô")
                return;
            }
        })
    });
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    return true;
}

buttonElement.addEventListener('click', () => {
    const userAnswer = Array.from(document.querySelector('input').value);
    console.log(userAnswer)
    console.log(currentAnswer)

    if (arraysEqual(userAnswer, currentAnswer)) {
        currentAnswer.forEach((item, index) => {
            answerElement.children[index].textContent = item;
        });
        alert('ok')

        setTimeout(() => {
            questionIndex++;
            displayQuestion();
        }, 1000)
    }
    else {
        alert('sai')
    } 
})

displayQuestion();
