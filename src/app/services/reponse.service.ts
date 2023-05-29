import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http:HttpClient) 
{ }
   
   public reponses(){
    return this.http.get(`${baseUrl}/reponse/`)
   }
  
   //add reponse
   public addReponse(reponse:any){
    return this.http.post(`${baseUrl}/reponse/`,reponse);
   }
   //add all reponses
   public  addallreponse(reponses:any){
    return this.http.post(`${baseUrl}/reponse/all`,reponses);
   }
   //addall with question
   public  addallreponseques(reponses:any,quesId:any){
    return this.http.post(`${baseUrl}/reponse/allquestion/${quesId}`,reponses,quesId);
   }
   
   //delete reponse
   public deleteReponse(idreponse:any){
    return this.http.delete(`${baseUrl}/reponse/${idreponse}`);
   }

   //get the single reponse

   public getReponse(idreponse:any){
    return this.http.get(`${baseUrl}/reponse/${idreponse}`);
   }

   public updateReponse(reponse:any){
    return this.http.put(`${baseUrl}/reponse/`,reponse);
   }

   public getReponseofQuestion(quesid:any){
    return this.http.get(`${baseUrl}/reponse/question/${quesid}`);
   }

}
