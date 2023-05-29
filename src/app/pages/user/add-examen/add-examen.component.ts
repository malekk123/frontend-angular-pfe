import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { QuizService } from 'src/app/services/quiz.service';
import { QuestionService } from 'src/app/services/question.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowreponseComponent } from '../showreponse/showreponse.component';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-examen',
  
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})

export class AddExamenComponent implements OnInit {
  examen={
    nomexam:'',
    duree:'',
    campagne:{
      campid:'',
    },
    
  }
  constructor(
    private route:ActivatedRoute,
    private snack:MatSnackBar,
    private exam:ExamenService,
    private location:Location,
   private _quiz:QuizService,
   private dialogRef : MatDialog,
   private login:LoginService,
   private entr:EntrepriseService,
   private quest:QuestionService,
  private _router:Router, 
   ) { }
  show=false;
  userid:any;
  entreprise:any;
  ques:any;
  qId:any;
  click : boolean = false;
  categories=[];
  quizzes:any;
  show2=false;
  searchInput:string|any;
  campid:any;
  nomCampagne:any;
  ex:any;
  examid=0;
  questions = [];
  qut:any;
  sampleForment = new FormGroup({
    searchInputent : new FormControl('')
   }) 
  sampleForm = new FormGroup({
    searchInput : new FormControl('')
   })

  ngOnInit(): void {
    this.campid=this.route.snapshot.params['campid'];
    this.nomCampagne=this.route.snapshot.params['nomCampagne'];
    this.examen.campagne.campid=this.campid;
    this._quiz.getActiveQuizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error) => {
        console.log(error);
        //alert('error in loading all quizzes');
      }
    );
    //this.quest.findquestofbiblioquiz()  
    
  }
  chercher(id:any){
    
  }
  onButtonClick(){
    this.click = !this.click;
  }
  formSubmit(){
    //valider la durée de l'examen
   /* if (this.examen.duree ==null){
      this.snack.open('Il faut préciser la durée de l"examen','ok',{
        duration:3000,
      });
      return;
    }*/

    //fonction pour ajouter un examen 
       this.exam.addExamen(this.examen).subscribe(
        (data:any)=>{
           console.log(data);
           this.ex=data;
           console.log(this.ex);
           this.examid = data.idExam;
           console.log(this.examid);
        },
        (error)=>{
          console.log(error);
          Swal.fire('Error!! ', 'Error dans l ajout de l examen', 'error');

        }
       );
  }
  showreponse(quesId:any){
    this.dialogRef.open(ShowreponseComponent,{data:{quesId}});
  
  }
  change(event:any){
   console.log(this.sampleForm.value.searchInput)
  }
  change2(event:any){
    console.log(this.sampleForment.value.searchInputent);
  }
  ajouter(id:any){
  this.exam.AssignQuestionToExam(this.ex,this.ex.idExam,id).subscribe(
    (data)=>{
      console.log(data);
    },
    (error)=>{
      console.log(error);
    }
  )
  }
  onSubmit(){
    console.log(this.sampleForm.value)
    console.log(this.sampleForm.value.searchInput)
    let i=this.sampleForm.value.searchInput;
    console.log(i);
    this.quest.getQuestionsOfQuiz(i).subscribe(
      (data)=>{
        console.log(data);
        this.qut=data;
        this.show=true

        this.questions = this.qut;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  onSubmitentre(){
    console.log(this.sampleForment.value.searchInputent)
     this.qId =this.sampleForment.value.searchInputent;
     console.log(this.qId);
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userid =data.id ;
         console.log(data);
         console.log(this.userid);
        this.entr.getentrepriseofuser(this.userid).subscribe(
          (entrepris:any)=>{
           console.log(entrepris.entrpriseid); 
           this.entreprise=entrepris;
           this.quest.findquestionquizofentreprise(this.entreprise.entrpriseid,this.qId).subscribe(
            (data:any) =>{
              console.log(data);
              this.questions=data;
              this.show2=true;

              },
            (error:any)=>{
              console.log(error);
            })
          })
       // this.entreprise = data;
      },
      (error:any)=>{
        console.log(error);
      });
  }
  ajoutecandidat(){
    Swal.fire({
      title: 'Vous voulez inviter des candidats ?',

      showCancelButton: true,
      confirmButtonText: `confirmer`,
      denyButtonText: `Retourner`,
      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.location.back();

      //  this._router.navigate(['user-dashboard/invitation']);
      } else if (result.isDenied) {
        Swal.fire('annuler l invitation', '', 'info');
      }
    });
  }
  
}
