import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MailinvitationService {

  constructor(private http : HttpClient) { }

  public envoyerMAil(mail:any){
    return this.http.post(`${baseUrl}/mail/sendmail`,mail);

  }
}
