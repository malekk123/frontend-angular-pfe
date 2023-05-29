import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { LoginService } from 'src/app/services/login.service';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';
import { MatDialog } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { ShowreponseComponent } from '../showreponse/showreponse.component';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
 
  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _snak: MatSnackBar,
    private entr:EntrepriseService,
    private rep:ReponseService,
    private dialogRef : MatDialog,
    private login:LoginService
  ) { }
  qId:any;
  qTitle:any;
  reponses=[];
  questions = [];
   userid:any;
   entreprise:any;
  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qId'];
    this.qTitle = this._route.snapshot.params['qtitle'];
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userid =data.id ;
         console.log(data);
         console.log(this.userid);
        this.entr.getentrepriseofuser(this.userid).subscribe(
          (entrepris:any)=>{
           console.log(entrepris.entrpriseid); 
           this.entreprise=entrepris;
           this._question.findquestionquizofentreprise(this.entreprise.entrpriseid,this.qId).subscribe(
            (data:any) =>{
              console.log(data);
              this.questions=data;
              },
            (error)=>{
              console.log(error);
            })
          })
       // this.entreprise = data;
      },
      (error:any)=>{
        console.log(error);
      });
  
  }
   //delete quesion
   deleteQuestion(qid:any) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure , want to delete this question?',
    }).then((result) => {
      if (result.isConfirmed) {
        //confim
        this._question.deleteQuestion(qid).subscribe(
          (data) => {
            this._snak.open('Question Deleted ', '', {
              duration: 3000,
            });
            this.questions = this.questions.filter((q) => q['quesId'] != qid);
          },

          (error) => {
            this._snak.open('Error in deleting questions', '', {
              duration: 3000,
            });
            console.log(error);
          }
        );
      }
    });
  }
  showreponse(quesId:any){
    this.dialogRef.open(ShowreponseComponent,{data:{quesId}});
  
  }
}




  

  


