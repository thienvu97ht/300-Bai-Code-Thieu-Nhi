import { listQuizs } from './listQuizs.js';

// Hàm render ra trình duyệt
function renderQuiz() {
    var listQuizBlock = document.getElementById('list-quiz');
    var htmls = listQuizs.map(function (quiz) {
        return `
        <li id="quiz-item-${quiz.id}">
            <p class="quiz-text">Câu ${quiz.id}: What's the output?</p>
            <pre>
                <code class="javascript">
        ${quiz.code}
                </code>
            </pre>
            <div class="answer-block">
                <p class="quiz-text">Chọn đáp án:</p>
                <input type="radio" id="answerA-${quiz.id}" name="gender" value="1">
                <label for="answerA-${quiz.id}">
                    ${quiz.answerA}
                </label><br>
            
                <input type="radio" id="answerB-${quiz.id}" name="gender" value="2">
                <label for="answerB-${quiz.id}">
                    ${quiz.answerB}
                </label><br>
            
                <input type="radio" id="answerC-${quiz.id}" name="gender" value="3">
                <label for="answerC-${quiz.id}">
                    ${quiz.answerC}
                </label><br>
            
                <input type="radio" id="answerD-${quiz.id}" name="gender" value="4">
                <label for="answerD-${quiz.id}">
                    ${quiz.answerD}
                </label>
            </div>
        </li>
        `
    });
    listQuizBlock.innerHTML = htmls.join('');
};

renderQuiz(listQuizs)