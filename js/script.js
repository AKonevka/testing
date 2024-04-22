// массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["JS", "Python", "Javs", "C++"],
        correctAnswer: "JS"
    },
    {
        question: "В каком году изобрели первый компьютер?",
        options: ["1927", "1930", "1936", "2000"],
        correctAnswer: "1927"
    },
    {
        question: "В каком году была изобретена машина Тьюринга?",
        options: ["1930", "1927", "2000", "1936"],
        correctAnswer: "1936"
    },
    {
        question: "Сколько месяцев в году?",
        options: ["1", "9", "12", "5"],
        correctAnswer: "12"
    },
    {
        question: "Сколько лет Java Script?",
        options: ["28", "24", "30", "29"],
        correctAnswer: "29"
    },
    {
        question: "Високостный год:",
        options: ["2014", "2015", "2024", "2023"],
        correctAnswer: "2024"
    },
];

let wrongAnswers = []

// ввод имени

let blockName = document.getElementById('name');
let nameInput = document.getElementById('nameInput');
let buttonOk = document.getElementById('btn');

let name
console.log(nameInput.value)

buttonOk.addEventListener('click', () => {
    name = nameInput.value;
    blockName.style = `display:none;`
})







let currentQuestion = 0; // текущий вопрос
let = correctAnswers = 0; // Количество правильных ответов

// Функция для отображения текущего вопроса и вариантов ответов
function displayQuestion() {
    let questionElement = document.getElementById("question"); //Получим блок куда размещать вопрос
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    // Получим блоки кнопок
    let optionsElement = document.getElementById("options");
    // Очистим блок с кнопками 
    optionsElement.innerHTML = "";

    // Массив ответов
    let optionsArray = questions[currentQuestion].options;

    // Создать кнопки с вариантами ответов и привязать к ним функцию nextQuestion
    optionsArray.forEach((options) => {
        let button = document.createElement('button');
        optionsElement.append(button);
        button.textContent = options;
        button.classList.add('btn');
    })

    // при клике на блок с кнопками :
    optionsElement.addEventListener('click', (e) => {
        // получаем переменную кнопку, на которую кликнули
        target = e.target;
        // Вызовём функцию проверки ответа и перехода к следующему вопросу: (в аргумент функции передаем текст ответа):
        nextQuestion(target.textContent)
    }, { once: true })



}

// функция для перехода к следующему вопросу
function nextQuestion(answer) {
    // Если переднный ответ раывен корректному
    if (answer == questions[currentQuestion].correctAnswer) {
        // Увеличиваем на единицу количество правильных ответов
        correctAnswers++

    } else {
        wrongAnswers[currentQuestion] = questions[currentQuestion].question;
    }
    // Переходим к следующему вопросу
    currentQuestion++
    // если номер текущего вопроса меньше количества вопросов то отображаем следующий вопрос
    if (currentQuestion < questions.length) {
        displayQuestion()
    } else {
        displayResult()
    }


}

function estimation() {
    let num = correctAnswers / questions.length * 100;
    if (num > 89) {
        num = 5
    } else if (num > 74) {
        num = 4
    } else if (num > 49) {
        num = 3
    } else {
        num = 2
    }
    return num;

    //console.log(questions.length + "/" + correctAnswers + "*" + "100 =" + estimatio)
}

// функция для вывода неправильных ответов

function wrongAnswersf() {
    let textwrongAnswers = "";
    wrongAnswers.forEach(function (item) {
        textwrongAnswers += item
        textwrongAnswers += "<br>"
    });

    return textwrongAnswers
}

let sdf = ``;

// Функция отобюражения результата теста
function displayResult() {
    const questionElement = document.getElementById("question"); // Блок с вопросом
    const optionsElement = document.getElementById("options"); // Блок с вариантами ответов
    const resultElement = document.getElementById("result"); // Блок для отображения результатов
    let percent = correctAnswers / questions.length * 100;
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    let wrongAnswersDiv = document.createElement('div');
    let answerDiv = document.createElement('div');
    resultElement.append(wrongAnswersDiv);
    resultElement.append(answerDiv);
    resultElement.innerHTML = `${name}. Ваша оценка ${estimation()}.<br>
    Правильных ответов ${correctAnswers} из ${questions.length} (${percent.toFixed(1)}%) <br>
    Вопросы в которых вы ошиблись: <br>
    ${wrongAnswersf()}`;


    estimation();
}


displayQuestion();




