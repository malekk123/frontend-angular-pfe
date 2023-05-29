import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http : HttpClient) { }


  //ajouter un examen
   public addExamen(examen:any){
    return this.http.post(`${baseUrl}/examen/`,examen);
   }
   
   //editer un examen
   public updateExamen(examen:any){
    return this.http.put(`${baseUrl}/examen/`,examen);
   }

   //get one exam
   public getSingleexam(idexam:any){
    return this.http.get(`${baseUrl}/examen/${idexam}`);
   }

   public deleteSingleexam(idexam:any){
    return this.http.delete(`${baseUrl}/examen/${idexam}`);
   }

   public Allexam(){
   return  this.http.get(`${baseUrl}/examen/`);
   }

   public findAllexamofcampagne(campid:any){
    return  this.http.get(`${baseUrl}/examen/campagne/${campid}`);
   }

   public  AssignQuestionToExam(examen:any,idexam:any,questid:any){
    return this.http.post(`${baseUrl}/examen/${idexam}/question/${questid}`,examen);
   }
}
