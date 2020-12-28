import { getData, extractData } from './model'
import { renderData, quizDetails, elements } from './view'
// import Swup from 'swup';
// const swup = new Swup()



//events listeners
window.addEventListener('load',() => {
    //render quiz details
    extractData()
    setTimeout(() => {
        quizDetails(elements.quizes)
    }, 1000)
})