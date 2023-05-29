import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  //add user
  public addUser(user:any){
    return this.http.post(`${baseUrl}/user/`,user)
  }

  public addUserWithEntreprise(user: any,nom:any) {
    return this.http.post(`${baseUrl}/user/${nom}/`, user,nom);
  }
 /* public getUsers(){
    return this.http.post(`${baseUrl}/user/get`)
  }*/

  public addCandidat(user: any) {
    return this.http.post(`${baseUrl}/user/candidat`, user);
  }
 
  public getlistusernormal(){
    return this.http.get(`${baseUrl}/user/getlist`);
  }

  public confirmerUserAccount(confirmationToken:any){
    return this.http.get(`${baseUrl}/user/confirmAccount/${confirmationToken}`)
  }

  public getUserById(userId:any){
    return this.http.get(`${baseUrl}/user/user/${userId}`);
  }

  public deleteUser(userId:any){
    return  this.http.delete(`${baseUrl}/user/${userId}`);
  }

  public findAllUsers(){
    return this.http.get(`${baseUrl}/user/users`);
  }

  public updateUser(user:any){
    return this.http.put(`${baseUrl}/user/`,user);
  }

  public getuserByEntreprise(entrpriseid:any){
    return this.http.get(`${baseUrl}/user/entreprise/${entrpriseid}`);
  }
  
  public processForgetMotdepasse(username:any){
    return this.http.post(`${baseUrl}/user/forgotPassword/${username}`,username);
  }

  public processResetMotdepasse(password:any,token:any){
    return this.http.post(`${baseUrl}/user/resetPassword/${password}/${token}`,password,token);
  }

  public confirmUserAccount(userid:any){
    return this.http.post(`${baseUrl}/user/confirm/${userid}`,userid)
  }
  public getAllcandidat(){
    return this.http.get(`${baseUrl}/user/allcandidat`);
  }
 }
