import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { MatDialog } from '@angular/material/dialog';
import { ReponseService } from 'src/app/services/reponse.service';
import { AjouterreponseComponent } from '../ajouterreponse/ajouterreponse.component';
@Component({
  selector: 'app-ajouter-question',
  templateUrl: './ajouter-question.component.html',
  styleUrls: ['./ajouter-question.component.css']
})
export class AjouterQuestionComponent implements OnInit {
  qId:any;
  qTitle:any;
  question = {
    quiz: {
      qId:'',
    },
    entreprise :{
      entrpriseid:'',
    },
    content: '',
    type:'',
    point:'',
    bibad:false,
    bibus:false,
    
  };
  reponses:any[] =[{
    reponse:'',
    estcorrecte:false,
    
  }];
  ques:any;
  quest:any;
  questionId:any;
  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private entr:EntrepriseService,
    private router:Router,
    private usr:UserService,
    private login:LoginService,
    private rep:ReponseService,
    private dialogRef : MatDialog,
    private location:Location
  ) { }
  user:any;
  id=0;
  entrp:any;
  userid=0;
  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qId'];
    this.qTitle = this._route.snapshot.params['qtitle'];
    this.question.quiz['qId'] = this.qId;
    console.log( this.question.quiz['qId'])

   
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userid =data.id ;
         console.log(data);
         console.log(this.userid);
        this.entr.getentrepriseofuser(this.userid).subscribe(
          (entrepris:any)=>{
           console.log(entrepris); 
           this.entrp=entrepris;
           
    this.question.entreprise=this.entrp;
  //  console.log(this.question.entreprise);   
          }
        )
       // this.entreprise = data;
      },
      (error:any)=>{
        console.log(error);
      }

        );
        console.log(this.question.entreprise.entrpriseid);

   
    
  }
 
  addreponseform(){
    this.reponses.push({
      reponse:'',
      estcorrecte:false,
      
      
    });
  }
  deleteResponse(i:number){
    this.reponses.splice(i,1);
  }
  formSubmit() {
    if (this.question.content.trim() == '' || this.question.content == null) {
      return;
    }
   /*
    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      return;
    }
    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      return;
    }
    if (this.question.point. == 0 || this.question.point == null) {
      return;
    }

    /*if (this.question.answer.trim() == '' || this.question.answer == null) {
      return;
    }*/
    let id:any;
    //form submit
    this._question.addQuestion(this.question).subscribe(
      (data: any) => {
        Swal.fire('Succès ', 'Vous allez ajouter les réponses à cette question!!', 'success').then(
          (e) => {  
            this.quest = data;   
        this.questionId = data.quesId;
        this.dialogRef.open(AjouterreponseComponent,{data:{ques:this.questionId}});
        console.log(this.quest.questId);
          });
       /* this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
        this.question.point ='';*/
      },
      (error) => {
        Swal.fire('Erreur', 'Erreur dans l enregistrement', 'error');
      }
    );
  }
  
  onchange(e:any){
    console.log(e.target.value)
    
   }
  back():void{
    this.location.back();

  }
  /*changeType(e:any){
    
    this.question.type?.typet(e.target.value,{onlySelf:true});
  }*/
 get typet(){
    return this.question.type; 
  }
  set typet(v:string){
    this.question.type = v;
    console.log(this.question.type);
  }
  typeList = ['unique','multiple'];
 /* changeType(e:any){
    this.type?.setValue(e.target.value,{onlySelf:true});
  }*/
  Submit(){
    for(let i=0;i<this.reponses.length;i++){
      this.reponses[i].question.quesId = this.questionId;
    }
       this.rep.addallreponse(this.reponses).subscribe(
        (data:any)=>{
          
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
       )
  }
}
