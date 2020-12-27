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
    currentQuiz: 1,
    nextQuiz: 0
}

export function renderData(quizes){
    const numberOfQuizes = quizes.length;
    let question = quizes[elements.nextQuiz].question;
    let answers = [];
    for (let i = 0; i < quizes.length; i++){
        answers.push(quizes[i].answers)
    }
    let answer = answers[elements.nextQuiz]
    
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
    elements.numberOfQuizes.textContent = numberOfQuizes;
    
    switchQuiz(elements.question, quizMarkup)
    fixSyntax();
    removeNullResponses();

}

function fixSyntax(){
    document.querySelectorAll('.answer').forEach(el => {
        if (el.nodeType === 8){
            el.style.display = 'block';
        }
    })
}

function removeNullResponses(){
    document.querySelectorAll('.answers > *').forEach(ans => {
        if (ans.textContent === 'null'){
            ans.parentElement.removeChild(ans)
        }
    })
}

// function checkRightAnswer(){

// }

function switchQuiz(question, nextQuiz){
    
    document.addEventListener('click', (e) => {
        
        if (e.target.dataset.name === 'next'){
            elements.nextQuiz++
            elements.currentQuiz++
            question.innerHTML = '';
            setTimeout(() => {
                question.innerHTML = nextQuiz
            }, 500)
        }
        else if (e.target.dataset.name === 'skip'){
            elements.nextQuiz++
            elements.currentQuiz++
            question.innerHTML = ''
            question.innerHTML = nextQuiz
        }
        else {
            return 
        }
        elements.quizNumber.textContent = elements.currentQuiz
        console.log(elements.nextQuiz)
    })   
}

