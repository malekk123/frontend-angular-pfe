import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CandrepService {

  constructor(private http:HttpClient) { }

  //ajouter des reponsescandidat
  public addrepcan(repcandidat:any,quesId:any,idcandidat:any){
    return this.http.post(`${baseUrl}/repcandidat/allrep/question/${quesId}/candidatexam/${idcandidat}`,repcandidat,quesId,);
  }
  

}
