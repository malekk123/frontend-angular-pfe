import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CandidatexamService {

  constructor(private _http: HttpClient) { }

  public addcandidatexam(candidatexam:any) {
    return this._http.post(`${baseUrl}/camdidatexam/`, candidatexam);
  }

  public updatecandidatexam(candidatexam:any) {
    return this._http.put(`${baseUrl}/camdidatexam/`, candidatexam);
  }

  public singlecandidatexam(idcandidat:any){
    return this._http.get(`${baseUrl}/camdidatexam/${idcandidat}`);
  }

  public getcandidatexambyexam(idExam:any){
    return this._http.get(`${baseUrl}/camdidatexam/examen/${idExam}`);
  }

  public getcandidatbytoken(token:any){
    return this._http.get(`${baseUrl}/camdidatexam/candidatexamen/${token}`);
  }

  public getCandidatexambycandidatandexam(idExam:any,id:any){
    return this._http.get(`${baseUrl}/camdidatexam/examen/${idExam}/user/${id}`);
  }

  public deletecan(idcandidat:any){
    this._http.delete(`${baseUrl}/camdidatexam/${idcandidat}`);
  }
  public updatetimer(idcandidat:any,timer:any){
    return this._http.put(`${baseUrl}/camdidatexam/candidat/${idcandidat}/time/${timer}`,idcandidat,timer);
  }

}
