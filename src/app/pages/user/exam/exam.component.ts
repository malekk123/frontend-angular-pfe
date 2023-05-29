import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuestionService } from 'src/app/services/question.service';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
campid:any; 
nomCampagne:any;
exam:any=[];

  constructor(
    private route:ActivatedRoute,
    private snack:MatSnackBar,
    private location:Location,
    private _router:Router,
    private ex:ExamenService,
    private quest:QuestionService,
  ) { }
  questions=[];examid=0;
  ngOnInit(): void {
    this.campid=this.route.snapshot.params['campid'];
    this.nomCampagne=this.route.snapshot.params['nomCampagne'];
    this.ex.findAllexamofcampagne(this.campid).subscribe(
      (data:any)=>{
              console.log(data);
              this.exam = data;
              console.log(data.idExam);
              this.examid = data.idExam;
            this.quest.getQuestionofExam(this.examid).subscribe(
              (data:any)=>{
              //  console.log(data);
                this.questions= data;
              },(error)=>{
                console.log(error);
              }
            )
      },(error)=>{console.log(error);}
    )
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

 public back():void{
  this.location.back();
 }
 goclassement(id:any){
  this._router.navigate(['/user-dashboard/classement/' +id]);
 }
 go(id:any){
  this._router.navigate(['/user-dashboard/question/' +id]);

   /* Swal.fire({
      icon:'info',
      title:'Vous allez voir une copie des questions l examen',
      confirmButtonText:'voir',
      showCancelButton:true,
    }).then((result)=>{
          if (result.isConfirmed){
              this._router.navigate(['/user-dashboard/question/' +id]);
        }else if (result.isDenied) {
          Swal.fire('Annuler ', '', 'info');
        }
        });
      }*/   
    }
  
      
 delete(id:any){
  this.ex.deleteSingleexam(id).subscribe(
    (data)=>{
      console.log(data);
      this.exam = this.exam.filter((ex:any)=> ex['idExam'] != id);
      Swal.fire('Succès','examen supprimée','success');
    },(error)=>{
      console.log(error);
    }
  )
 }
}
