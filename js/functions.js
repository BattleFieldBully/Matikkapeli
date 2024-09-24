'use strict'

let rand_num1 = 0
let rand_num2 = 0

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

const randomizeNumbers = () => {
    rand_num1 = getRandomInt(0, 100)
    rand_num2 = getRandomInt(0, 100)
    document.getElementById('num1').innerHTML = rand_num1
    document.getElementById('num2').innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
});

document.querySelector('button').addEventListener('click',() => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    
    if (answer === correctAnswer) {
        alert('Correct!')
        document.querySelector('span#correct-answers').innerHTML = Number(document.querySelector('span#correct-answers').innerHTML) + 1
    } else {
        alert('Incorrect!')
        document.querySelector('span#incorrect-answers').innerHTML = Number(document.querySelector('span#incorrect-answers').innerHTML) + 1
    }

    randomizeNumbers()
    document.querySelector('input').value = ''

})


