import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private _http: HttpClient) {}

  public getQuestionsOfQuiz(qid:any) {
    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  public getQuestionsOfQuizForTest(qid:any) {
    return this._http.get(`${baseUrl}/question/quiz/${qid}`);
  }
  
  public getQuestionofExam(examid:any){
    return this._http.get(`${baseUrl}/question/exam/${examid}`);
  }
  //add question
  public addQuestion(question:any) {
    return this._http.post(`${baseUrl}/question/`, question);
  }
  //add all question
  public addAllquestion(question:any){
    return this._http.post(`${baseUrl}/question/addall`,question);
  }
  //delete question
  public deleteQuestion(questionId:any) {
    return this._http.delete(`${baseUrl}/question/${questionId}`);
  }

  //afficher les questions de quiz de l'entreprise
  public findquestionquizofentreprise(entrpriseid:any,qid:any){
    return this._http.get(`${baseUrl}/question/entreprise/${entrpriseid}/quiz/${qid}`);
  }

  //afficher les questions de la bibliotheque admin
  public findquestofbiblioquiz(qid:any){
    return this._http.get(`${baseUrl}/question/quizadmin/${qid}`); 
  }

  public getSinglequestion(questid:any){
    return this._http.get(`${baseUrl}/question/${questid}`);
  }

  public update (question:any){
    return this._http.put(`${baseUrl}/question/`, question)
  }
  
}
