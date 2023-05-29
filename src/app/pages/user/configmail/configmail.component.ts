import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { MailinvitationService } from 'src/app/services/mailinvitation.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-configmail',
  templateUrl: './configmail.component.html',
  styleUrls: ['./configmail.component.css']
})
export class ConfigmailComponent implements OnInit { 
mail={
  mailFrom:'',
  mailTo : '',
  mailSubject:'',
  mailContent:'',
}
  email:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private login:LoginService,private entr:EntrepriseService,private mailenv:MailinvitationService) {
    this.email=data.email;

    console.log(data.email);
    console.log(this.email);
   }
objet='Evaluation Technique';
userid:any;
entreprise:any;
id=0;
  ngOnInit(): void {
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userid =data.id ;
         console.log(data);
         console.log(this.userid);
        this.entr.getentrepriseofuser(this.userid).subscribe(
          (entrepris:any)=>{
           console.log(entrepris); 
           this.id= entrepris.entrpriseid;
           this.entreprise=entrepris;
           this.mail.mailFrom=this.entreprise.email;
           this.mail.mailContent = this.entreprise.desccontenumail;
          console.log (entrepris.entrpriseid);},
          (error:any)=>{
            console.log(error);
               })},(error)=>{
                console.log(error);
               });    
     this.mail.mailTo = this.email;

     this.mail.mailSubject=this.objet;
     //this.mail.body = this.entreprise.
              }
   formmail(){
    this.mailenv.envoyerMAil(this.mail).subscribe(
      (data)=>{
        Swal.fire('succés','Mail envoyé','success')
        console.log('success')
      },
      (error)=>{
        console.log(error)
      }
    )
   }
}
