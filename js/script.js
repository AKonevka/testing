// массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        view: "test",
        question: "С какого по какой год шла Великая Отечественная Война?",
        options: ["1939 г. - 1945 г.", "1941 г. - 1945 г.", "1954 г. - 1989 г.", "1914 г. - 1918 г."],
        correctAnswer: "1941 г. - 1945 г."
    },
    {
        view: "test",
        question: "Какого числа произошло вторжение Германии в СССР?",
        options: ["22 июня 1941 г.", "22 июля 1941 г.", "24 июня 1941 г.", "22 июня 1939 г."],
        correctAnswer: "22 июня 1941 г."
    },
    {
        view: "text",
        question: "Фамилия героя СССР на изображении",
        image: "img/textquestion1.jpg",
        correctAnswer: "Горшков"
    },
    {
        view: "test",
        question: "В каком году впервые с распада СССР прошел парад в день 9 мая?",
        options: ["1994 г.", "1985 г.", "1995 г.", "2000 г."],
        correctAnswer: "1995 г."
    },
    {
        view: "test",
        question: "Сколько продолжалась блокада Ленинграда?",
        options: ["100 дней", "872 дня", "886 дня", "988 дня"],
        correctAnswer: "872 дня"
    },
    {
        view: "test",
        question: "В каком году 9 мая стал выходным днем? ",
        options: ["1980", "1995", "2003", "1946"],
        correctAnswer: "1965"
    },
    {
        view: "text",
        question: "Название здания, на крышу которого был поставлен флаг СССР",
        image: "img/textquestion2.jpg",
        correctAnswer: "Рейхстаг"
    },

];

// таблица для текстовых вопросов

let wrongAnswers = []

// ввод имени

let blockName = document.getElementById('name');
let nameInput = document.getElementById('nameInput');
let buttonOk = document.getElementById('btn');

let name
/*
console.log(nameInput.value)
*/
buttonOk.addEventListener('click', () => {
    name = nameInput.value;
    blockName.style = `display:none;`
})







let currentQuestion = 0; // текущий вопрос
let = correctAnswers = 0; // Количество правильных ответов

// Функция для отображения текущего вопроса и вариантов ответов
function displayQuestiontest() {
    let questionElement = document.getElementById("question"); //Получим блок куда размещать вопрос
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    // Получим блоки кнопок
    let optionsElement = document.getElementById("options");
    optionsElement.style.flexDirection = "row";
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

// функция для отображения вопрса с текстом
function displayQuestiontext() {
    let questionElement = document.getElementById("question"); //Получим блок куда размещать вопрос
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    // Получим блоки кнопок
    let optionsElement = document.getElementById("options");
    // Очистим блок с кнопками 
    optionsElement.innerHTML = "";
    optionsElement.style.flexDirection = "column";
    // Массив ответов
    let optionsArray = questions[currentQuestion].options;
    // создать input для ввода ответа
    let input = document.createElement("input");
    optionsElement.appendChild(input);
    input.classList.add("questionInput");

    // создать кнопку для подтверждения ответа
    let button = document.createElement("button");
    optionsElement.appendChild(button);
    button.classList.add("textBtn");
    button.textContent = "OK";

    // создать img куда добавим изображение
    let img = document.createElement("img");
    img.src = questions[currentQuestion].image;
    img.classList.add("img");
    optionsElement.appendChild(img);

    button.addEventListener('click', (e) => {
        nextQuestion(input.value)
    })


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
        if (questions[currentQuestion].view == "text") {
            displayQuestiontext();
        } else {
            displayQuestiontest()
        }
        //displayQuestiontest()

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
        const resultElement = document.getElementById("result");
        let wrongAnswersDiv = document.createElement('div');

        resultElement.append(wrongAnswersDiv);
        wrongAnswersDiv.textContent = item;
        /*textwrongAnswers += item
        textwrongAnswers += "<br>"*/
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

    let answerDiv = document.createElement('div');

    resultElement.append(answerDiv);
    resultElement.innerHTML = `${name}. Ваша оценка ${estimation()}.<br>
    Правильных ответов ${correctAnswers} из ${questions.length} (${percent.toFixed(1)}%)0`;
    wrongAnswersf();
    /*<br>
    Вопросы в которых вы ошиблись: <br>
    ${wrongAnswersf()}`;*/


    estimation();
}


displayQuestiontest();




