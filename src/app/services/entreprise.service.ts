import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { entreprise } from '../models/entreprise';
@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http: HttpClient) {}

  //add entreprise
  public addEntreprise(entreprise:any){
    return this.http.post(`${baseUrl}/entreprise/`, entreprise);
    }
   public updateEntreprise(entreprise:any){
    return this.http.put(`${baseUrl}/entreprise/`, entreprise);
   }

   public getSingleEntreprise(entrepriseid:any){
    return this.http.get(`${baseUrl}/entreprise/${entrepriseid}`);
  }
     public getAllentreprise (){
      return this.http.get(`${baseUrl}/entreprise/`);
     }

     public getentrepriseofuser(userid:any){
       return this.http.get(`${baseUrl}/entreprise/user/${userid}`);
     }
    public getentrepriseBuser(user:any){
      return this.http.get(`${baseUrl}/entreprise/user/`);
    } 

    public delete(entrepriseid:any){
      return this.http.delete(`${baseUrl}/entreprise/${entrepriseid}`)
    }
  //load the camapany of user 

}
