import { extractData } from './model'
export const elements = {
    endpoint: 'https://quizapi.io/api/v1/questions?apiKey=y66DEcXKkhS22tdYHzwbp5JAtb1rGChSeLPXXDv4&category=code&limit=10&tags=JavaScript',
    data: [],
    quizes: [],
    inputName: document.querySelector('[name="name"]'),
    startButton: document.querySelector('#start'),
    numberOfQuizes: document.querySelector('#total'),
    question: document.querySelector('.question'),
    quizNumber: document.querySelector('#current'),
    progressBar: document.getElementById('prog'),
    currentQuiz: 1,
    nextQuiz: 0,
    cach: {}
}

export function renderData(quizes, currentQuiz){

    let question = quizes[currentQuiz].question;
    let answers = [];
    for (let i = 0; i < quizes.length; i++){
        answers.push(quizes[i].answers)
    }
    let answer = answers[currentQuiz]
    
    const quizMarkup = `
    <div class="question w-11/12">
      <p class="question_txt text-white font-semibold text-3xl md:text-4xl leading-normal w-11/12">
        ${question}
      </p> 
    </div>
    <div class="answers mt-8 grid grid-cols-2 grid-rows-3 gap-4" style="grid-column-gap: -5px;">
        <div class="answer cursor-pointer w-11/12	h-32 bg-white col-span-2 md:col-span-1 font-bold text-2xl break-words p-4">${answer.answer_a}</div>
        <div class="answer cursor-pointer w-11/12	h-32 bg-white col-span-2 md:col-span-1 font-bold text-2xl break-words p-4">${answer.answer_b}</div>
        <div class="answer cursor-pointer w-11/12	h-32 bg-white col-span-2 md:col-span-1 font-bold text-2xl break-words p-4">${answer.answer_c}</div>
        <div class="answer cursor-pointer w-11/12	h-32 bg-white col-span-2 md:col-span-1 font-bold text-2xl break-words p-4">${answer.answer_d}</div>
        <div class="answer cursor-pointer w-11/12	h-32 bg-white col-span-2 md:col-span-1 font-bold text-2xl break-words p-4">${answer.answer_e}</div>
        <div class="answer cursor-pointer w-11/12	h-32 bg-white col-span-2 md:col-span-1 font-bold text-2xl break-words p-4">${answer.answer_f}</div>
    </div>
        <section class="chose-action mt-8 flex justify-between flex-wrap w-11/12">
        <button data-name="skip" class="col-span-1 font-semibold md:text-2xl text-yellow-400 hover:text-white transition-all duration-100 ease-in-out">Skip Question</button>
        <button data-name="next" class="col-span-1 font-semibold md:text-2xl text-yellow-400 hover:text-white transition-all duration-100 ease-in-out">Next Question</button>
    </section>
    `
    elements.question.innerHTML = quizMarkup;
    elements.cach.rendered = true

    // switchQuiz(elements.question)
    fixSyntax(question);
    removeNullResponses();
   

}

// function createQuizMarkUp(quizes){

// }

export function quizDetails(quizes){
    if (quizes){
        const numberOfQuizes = quizes.length;
        elements.numberOfQuizes.textContent = numberOfQuizes;
        
    }
}
function fixSyntax(question){
    document.querySelectorAll('.answer').forEach(el => {
        if (el.nodeType === 8){
            el.style.display = 'block';
        }
        if (el.textContent.includes === '<'){
            el = `*${el}*`
        }
        
    })
    if (question.includes('<script>')){
        question = `*${question}*`
    }
}

function removeNullResponses(){
    document.querySelectorAll('.answers > *').forEach(ans => {
        if (ans.textContent === 'null'){
            ans.parentElement.removeChild(ans)
        }
    })
}

function handleProgress(progressBar){

    //the initial value of the progress in the bar is 0
    //we want to increase it by a % each time we finish a question
    return function(cur){
        return function(total){
            progressBar.value = (cur/total)*100        
        }
    }
}

// function checkRightAnswer(){

// }

// function switchQuiz(){
    
document.addEventListener('click', (e) => {
        const total = quizDetails()
        console.log(total)
        if (e.target.dataset.name === 'next'){
            elements.nextQuiz++
            elements.currentQuiz++
           if (elements.cach.rendered){
                elements.question.innerHTML = '';
               renderData(elements.quizes, elements.nextQuiz)
           }
        }
        else if (e.target.dataset.name === 'skip'){
            elements.nextQuiz++
            elements.currentQuiz++
            question.innerHTML = ''
        }
        else {
            return 
        }
        elements.quizNumber.textContent = elements.currentQuiz
        console.log(elements.nextQuiz, elements.quizes.length)
        handleProgress(elements.progressBar)(elements.nextQuiz)(elements.quizes.length)
})   
// }
// 
