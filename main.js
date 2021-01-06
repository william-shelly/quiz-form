let question0, question1, question2, question3, question4, questions, icon0, icon1, icon2, icon3, icon4, icons, answer0, answer1, answer2, answer3, answer4, answers, input0, input1, input2, input3, input4, checkAnswers, resetAnswers, quizTotal, questionsTotal, statusMsg;

questionsTotal = 5;
quizTotal = 0;

answer0 = "red";
answer1 = "yellow";
answer2 = "pink";
answer3 = "green";
answer4 = "white";

answers = [answer0, answer1, answer2, answer3, answer4];

question0 = document.querySelector('#question0');
question1 = document.querySelector('#question1');
question2 = document.querySelector('#question2');
question3 = document.querySelector('#question3');
question4 = document.querySelector('#question4');

questions = [question0, question1, question2, question3, question4];

icon0 = document.querySelector('#icon0');
icon1 = document.querySelector('#icon1');
icon2 = document.querySelector('#icon2');
icon3 = document.querySelector('#icon3');
icon4 = document.querySelector('#icon4');

icons = [icon0, icon1, icon2, icon3, icon4];

input0 = document.querySelector('#answer0');
input1 = document.querySelector('#answer1');
input2 = document.querySelector('#answer2');
input3 = document.querySelector('#answer3');
input4 = document.querySelector('#answer4');

inputs = [input0, input1, input2, input3, input4];

checkAnswers = document.querySelector('#checkAnswers');
resetAnswers = document.querySelector('#resetAnswers');

statusMsg = document.querySelector('#statusMsg');

checkAnswers.addEventListener("click", function() {
    quizTotal = 0;

    for (let i=0; i < answers.length; i++) {
        console.log(answers[i]);
        console.log(inputs[i]);
        if (inputs[i].value.toLowerCase() === answers[i]) {
            inputs[i].classList.remove('border-danger');
            inputs[i].classList.add('border-success');
            inputs[i].classList.remove('text-danger');
            inputs[i].classList.add('text-black-50');
            inputs[i].classList.remove('background-danger');
            inputs[i].classList.add('background-success');
            questions[i].classList.remove('text-danger');
            questions[i].classList.add('text-success');
            icons[i].classList.remove('d-none');
            icons[i].classList.remove('fa-times');
            icons[i].classList.remove('text-danger');
            icons[i].classList.add('fa-check');
            icons[i].classList.add('text-success');
            quizTotal ++;
            console.log(quizTotal);

        } else {
            console.log("WRONG!" + " . " + inputs[i].value + " . " + answer0);
            inputs[i].classList.remove('border-success');
            inputs[i].classList.add('border-danger');
            inputs[i].classList.remove('text-black-50');
            inputs[i].classList.add('text-danger');
            inputs[i].classList.remove('background-success');
            inputs[i].classList.add('background-danger');
            questions[i].classList.remove('text-success');
            questions[i].classList.add('text-danger');
            icons[i].classList.remove('d-none');
            icons[i].classList.remove('fa-check');
            icons[i].classList.remove('text-success');
            icons[i].classList.add('fa-times');
            icons[i].classList.add('text-danger');
        }
    }

    console.log('Total = ' + quizTotal);
    if ( quizTotal === 5 ) {
        statusMsg.classList.remove('d-none');
        statusMsg.classList.remove('fs-3');
        statusMsg.classList.remove('text-danger');
        statusMsg.classList.add('fs-5');
        statusMsg.classList.add('text-success');
        statusMsg.innerText = "100% Correct! What a genius!!!"
    } else {
        statusMsg.classList.remove('d-none');
        statusMsg.classList.remove('fs-5');
        statusMsg.classList.remove('text-success');
        statusMsg.classList.add('fs-3');
        statusMsg.classList.add('text-danger');
        statusMsg.innerText = "You have answered " + quizTotal + " of " + questionsTotal + " questions correct."
    }
    return false;
});


resetAnswers.addEventListener("click", function() {
    input0.classList.remove('border-success');
    input0.classList.remove('border-danger');
    input0.classList.remove('text-black-50');
    input0.classList.remove('text-danger');
    input0.classList.remove('background-success');
    input0.classList.remove('background-danger');
    question0.classList.remove('text-success');
    question0.classList.remove('text-danger');
    input1.classList.remove('border-success');
    input1.classList.remove('border-danger');
    input1.classList.remove('text-black-50');
    input1.classList.remove('text-danger');
    input1.classList.remove('background-success');
    input1.classList.remove('background-danger');
    question1.classList.remove('text-success');
    question1.classList.remove('text-danger');
    input2.classList.remove('border-success');
    input2.classList.remove('border-danger');
    input2.classList.remove('text-black-50');
    input2.classList.remove('text-danger');
    input2.classList.remove('background-success');
    input2.classList.remove('background-danger');
    question2.classList.remove('text-success');
    question2.classList.remove('text-danger');
    input3.classList.remove('border-success');
    input3.classList.remove('border-danger');
    input3.classList.remove('text-black-50');
    input3.classList.remove('text-danger');
    input3.classList.remove('background-success');
    input3.classList.remove('background-danger');
    question3.classList.remove('text-success');
    question3.classList.remove('text-danger');
    input4.classList.remove('border-success');
    input4.classList.remove('border-danger');
    input4.classList.remove('text-black-50');
    input4.classList.remove('text-danger');
    input4.classList.remove('background-success');
    input4.classList.remove('background-danger');
    question4.classList.remove('text-success');
    question4.classList.remove('text-danger');
    icon0.classList.add('d-none');
    icon1.classList.add('d-none');
    icon2.classList.add('d-none');
    icon3.classList.add('d-none');
    icon4.classList.add('d-none');
    statusMsg.classList.add('d-none');
    statusMsg.classList.remove('fs-3');
    statusMsg.classList.remove('fs-5');
    statusMsg.classList.remove('text-success');
    statusMsg.classList.remove('text-danger');
    quizTotal = 0;
    console.log('Total = ' + quizTotal);
});
