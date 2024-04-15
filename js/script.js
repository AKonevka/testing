// массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question: "Какой язык программирования вы изучаете",
        options: ["JS", "Python", "Javs", "C++"],
        correctAnswer: "JS"
    },
    {
        question: "Какой язык программирования вы изучаете",
        options: ["JS", "Python", "Javs", "C++"],
        correctAnswer: "JS"
    },
    {
        question: "Какой язык программирования вы изучаете",
        options: ["JS", "Python", "Javs", "C++"],
        correctAnswer: "JS"
    },

    {
        question: "Сколько месяцев в году?",
        options: ["1", "9", "12", "5"],
        correctAnswer: "12"
    },

    {
        question: "Сколько лет Java Script?",
        options: ["28", "24", "30", "29"],
        correctAnswer: "JS"
    },

    {
        question: "Високостные года",
        options: ["JS", "Python", "2024", "C+"],
        correctAnswer: "JS"
    },

];

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

// Функция отобюражения результата теста
function displayResult() {
    const questionElement = document.getElementById("question"); // Блок с вопросом
    const optionsElement = document.getElementById("options"); // Блок с вариантами ответов
    const resultElement = document.getElementById("result"); // Блок для отображения результатов
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    resultElement.textContent = `Правильных ответов: ${correctAnswers} из ${questions.length}`
}


displayQuestion();




