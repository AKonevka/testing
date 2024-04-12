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


    })



}
displayQuestion();


