const axios = require('axios');
import { elements, renderData } from './view';

class Quiz {
    constructor(id, question, answers, correctAnswer){
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    checkRightAnswer(possibleAnswers){
        const answers = Object.keys(this.answers);
        let result;
        answers.forEach(ans => {
            if (ans === this.correctAnswer){
                result = true;
                this.updateScore(result)
            }
            else{
                result = false;
                this.updateScore(result)
            }
        })
    }
    updateScore(result){
        const score = 0;
        if (result){
            score++
        }
        return score;
    }

}

export async function getData(){
    const data = []
    const res = await axios(elements.endpoint)
    .then((res) => {
        elements.data.push(...res.data)
        data.push(...res.data)
    })
    .catch((error) => {
        console.log(error)
    })
   return data;
}

 export async function extractData(){
    // data.forEach(d => console.log(d))
    const extraction = await getData()
    extraction.forEach(data => {
        const quiz = new Quiz(data.id, data.question, data.answers, data.correct_answer)
        elements.quizes.push(quiz)
    })
    renderData(elements.quizes)
}



