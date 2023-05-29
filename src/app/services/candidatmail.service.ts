import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatmailService {

  constructor(private _http: HttpClient) { }

//ajouter un candidat  
public addCandidat(candidat:any){
 return this._http.post(`${baseUrl}/candidat/`,candidat); 
}

//trouver le candidat à partir du token
public findCanBytoken(token:any){
  return this._http.get(`${baseUrl}/candidat/${token}`);

}

public deleteToken(token:any){
 return this._http.get(`${baseUrl}/candidat/deletetoken/${token}`)
}

public generateToken(idCandidat:any){
  return this._http.get(`${baseUrl}/candidat/generateToken/${idCandidat}`)
}

public deleteCandidat(idCandidat:any){
  this._http.delete(`${baseUrl}/candidat/${idCandidat}`);
}

public envoyerMailAucandidat(email:any){
  return this._http.get(`${baseUrl}/candidat/mail/${email}`)
}

public findCandbucandex(idcandidat:any){
  return this._http.get(`${baseUrl}/candidat/candidatexam/${idcandidat}`)
}

public findCandsbtex(candex:any){
  return this._http.post(`${baseUrl}/candidat/listcandidat/`,candex)
}

public findCandidatbyid(idCandidat:any){
  return this._http.get(`${baseUrl}/candidat/getcandidat/${idCandidat}`)
}
}
