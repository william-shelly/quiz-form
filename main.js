let question0, question1, question2, question3, question4, icon0, icon1, icon2, icon3, icon4, answer0, answer1, answer2, answer3, answer4, input0, input1, input2, input3, input4, checkAnswers, resetAnswers, quizTotal, questionsTotal, statusMsg;

questionsTotal = 5;
quizTotal = 0;

answer0 = "red";
answer1 = "yellow";
answer2 = "pink";
answer3 = "green";
answer4 = "white";

question0 = document.querySelector('#question0');
question1 = document.querySelector('#question1');
question2 = document.querySelector('#question2');
question3 = document.querySelector('#question3');
question4 = document.querySelector('#question4');

icon0 = document.querySelector('#icon0');
icon1 = document.querySelector('#icon1');
icon2 = document.querySelector('#icon2');
icon3 = document.querySelector('#icon3');
icon4 = document.querySelector('#icon4');

input0 = document.querySelector('#answer0');
input1 = document.querySelector('#answer1');
input2 = document.querySelector('#answer2');
input3 = document.querySelector('#answer3');
input4 = document.querySelector('#answer4');

checkAnswers = document.querySelector('#checkAnswers');
resetAnswers = document.querySelector('#resetAnswers');

statusMsg = document.querySelector('#statusMsg');

checkAnswers.addEventListener("click", function() {
    quizTotal = 0;
    if (input0.value === answer0) {
        console.log(input0.value);
        input0.classList.remove('border-danger');
        input0.classList.add('border-success');
        input0.classList.remove('text-danger');
        input0.classList.add('text-black-50');
        input0.classList.remove('background-danger');
        input0.classList.add('background-success');
        question0.classList.remove('text-danger');
        question0.classList.add('text-success');
        icon0.classList.remove('d-none');
        icon0.classList.remove('fa-times');
        icon0.classList.remove('text-danger');
        icon0.classList.add('fa-check');
        icon0.classList.add('text-success');
        quizTotal ++;
        console.log(quizTotal);
    } else {
        console.log("WRONG!" + " . " + input0.value + " . " + answer0);
        input0.classList.remove('border-success');
        input0.classList.add('border-danger');
        input0.classList.remove('text-black-50');
        input0.classList.add('text-danger');
        input0.classList.remove('background-success');
        input0.classList.add('background-danger');
        question0.classList.remove('text-success');
        question0.classList.add('text-danger');
        icon0.classList.remove('d-none');
        icon0.classList.remove('fa-check');
        icon0.classList.remove('text-success');
        icon0.classList.add('fa-times');
        icon0.classList.add('text-danger');
    }
    if (input1.value === answer1) {
        console.log(input1.value);
        input1.classList.remove('border-danger');
        input1.classList.add('border-success');
        input1.classList.remove('text-danger');
        input1.classList.add('text-black-50');
        input1.classList.remove('background-danger');
        input1.classList.add('background-success');
        question1.classList.remove('text-danger');
        question1.classList.add('text-success');
        icon1.classList.remove('d-none');
        icon1.classList.remove('fa-times');
        icon1.classList.remove('text-danger');
        icon1.classList.add('fa-check');
        icon1.classList.add('text-success');
        quizTotal ++;
        console.log(quizTotal);
    } else {
        console.log("WRONG!" + " . " + input1.value + " . " + answer1);
        input1.classList.remove('border-success');
        input1.classList.add('border-danger');
        input1.classList.remove('text-black-50');
        input1.classList.add('text-danger');
        input1.classList.remove('background-success');
        input1.classList.add('background-danger');
        question1.classList.remove('text-success');
        question1.classList.add('text-danger');
        icon1.classList.remove('d-none');
        icon1.classList.remove('fa-check');
        icon1.classList.remove('text-success');
        icon1.classList.add('fa-times');
        icon1.classList.add('text-danger');
    }
    if (input2.value === answer2) {
        console.log(input2.value);
        input2.classList.remove('border-danger');
        input2.classList.add('border-success');
        input2.classList.remove('text-danger');
        input2.classList.add('text-black-50');
        input2.classList.remove('background-danger');
        input2.classList.add('background-success');
        question2.classList.remove('text-danger');
        question2.classList.add('text-success');
        icon2.classList.remove('d-none');
        icon2.classList.remove('fa-times');
        icon2.classList.remove('text-danger');
        icon2.classList.add('fa-check');
        icon2.classList.add('text-success');
        quizTotal ++;
        console.log(quizTotal);
    } else {
        console.log("WRONG!" + " . " + input2.value + " . " + answer2);
        input2.classList.remove('border-success');
        input2.classList.add('border-danger');
        input2.classList.remove('text-black-50');
        input2.classList.add('text-danger');
        input2.classList.remove('background-success');
        input2.classList.add('background-danger');
        question2.classList.remove('text-success');
        question2.classList.add('text-danger');
        icon2.classList.remove('d-none');
        icon2.classList.remove('fa-check');
        icon2.classList.remove('text-success');
        icon2.classList.add('fa-times');
        icon2.classList.add('text-danger');
    }
    if (input3.value === answer3) {
        console.log(input3.value);
        input3.classList.remove('border-danger');
        input3.classList.add('border-success');
        input3.classList.remove('text-danger');
        input3.classList.add('text-black-50');
        input3.classList.remove('background-danger');
        input3.classList.add('background-success');
        question3.classList.remove('text-danger');
        question3.classList.add('text-success');
        icon3.classList.remove('d-none');
        icon3.classList.remove('fa-times');
        icon3.classList.remove('text-danger');
        icon3.classList.add('fa-check');
        icon3.classList.add('text-success');
        quizTotal ++;
        console.log(quizTotal);
    } else {
        console.log("WRONG!" + " . " + input3.value + " . " + answer3);
        input3.classList.remove('border-success');
        input3.classList.add('border-danger');
        input3.classList.remove('text-black-50');
        input3.classList.add('text-danger');
        input3.classList.remove('background-success');
        input3.classList.add('background-danger');
        question3.classList.remove('text-success');
        question3.classList.add('text-danger');
        icon3.classList.remove('d-none');
        icon3.classList.remove('fa-check');
        icon3.classList.remove('text-success');
        icon3.classList.add('fa-times');
        icon3.classList.add('text-danger');
    }
    if (input4.value === answer4) {
        console.log(input4.value);
        input4.classList.remove('border-danger');
        input4.classList.add('border-success');
        input4.classList.remove('text-danger');
        input4.classList.add('text-black-50');
        input4.classList.remove('background-danger');
        input4.classList.add('background-success');
        question4.classList.remove('text-danger');
        question4.classList.add('text-success');
        icon4.classList.remove('d-none');
        icon4.classList.remove('fa-times');
        icon4.classList.remove('text-danger');
        icon4.classList.add('fa-check');
        icon4.classList.add('text-success');
        quizTotal ++;
        console.log(quizTotal);
    } else {
        console.log("WRONG!" + " . " + input4.value + " . " + answer4);
        input4.classList.remove('border-success');
        input4.classList.add('border-danger');
        input4.classList.remove('text-black-50');
        input4.classList.add('text-danger');
        input4.classList.remove('background-success');
        input4.classList.add('background-danger');
        question4.classList.remove('text-success');
        question4.classList.add('text-danger');
        icon4.classList.remove('d-none');
        icon4.classList.remove('fa-check');
        icon4.classList.remove('text-success');
        icon4.classList.add('fa-times');
        icon4.classList.add('text-danger');
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
