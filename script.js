const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
console.log(questions);
questions.forEach(question => question.addEventListener('click', e => {
    const question = e.currentTarget;
    const arrowiconstyle = window.getComputedStyle(question, '::after');
    const answer = e.currentTarget.nextElementSibling;

    console.log('Clicked', answer.style.display);
    if (answer.style.display == 'block') {
        question.classList.remove('active');
        answer.style.display = 'none';
    } else {
        // close all open answers and set all question to inactive
        questions.forEach(q => q.classList.remove('active'));
        answers.forEach(a => a.style.display = 'none');
        question.classList.add('active');
        answer.style.display = 'block';
    }

}));