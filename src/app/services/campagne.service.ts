import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class CampagneService {

  constructor(private http:HttpClient) { }
  
  //all campagnes
  public campagnes(){
    return this.http.get(`${baseUrl}/campagne/`);
  }

  //add campagne
  public addCampagne(campagne:any){
    return this.http.post(`${baseUrl}/campagne/`,campagne);
  }


  //delete campagne
  public deleteCampagne(campagneid:any){
    return this.http.delete(`${baseUrl}/campagne/${campagneid}`);
  }


  //update campagne
  public updateCampagne(campagne:any){
    return this.http.put(`${baseUrl}/campagne/`,campagne);
  }

  //get the single campagne
  public getCampagne(campagneid:any){
    return this.http.get(`${baseUrl}/campagne/${campagneid}`);

  }

  public getActiveCampagnes(){
    return this.http.get(`${baseUrl}/campagne/active`);
  }

  public getArchivesCampagnes(){
    return this.http.get(`${baseUrl}/campagne/archived`);
  }

  public getArchivedCampEntre(entrpriseid:any){
    return this.http.get(`${baseUrl}/campagne/archived/${entrpriseid}`);
  }

  public getActiveCampEntre(entrpriseid:any){
    return this.http.get(`${baseUrl}/campagne/active/${entrpriseid}`)
  }


}
