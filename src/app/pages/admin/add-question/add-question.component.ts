import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
//import Editor from '@ckeditor/ckeditor5-core/src/editor/editor';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatStepper } from '@angular/material/stepper';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ReponseService } from 'src/app/services/reponse.service';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators } from '@angular/forms'
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { MatDialog } from '@angular/material/dialog';
import { AjouterreponseComponent } from '../../user/ajouterreponse/ajouterreponse.component';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
  providers: [
   /* {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },*/
  ],
})
export class AddQuestionComponent implements OnInit {
  qId:any;
  qTitle:any;
  question = {
    quiz: {
      qId:'',
    },
   
    content: '',
    type:'',
    point:'',
    bibad:true,
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
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this.question.quiz['qId'] = this.qId;
    console.log( this.question.quiz['qId'])
   
   /* this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userid =data.id ;
         console.log(data);
         console.log(this.userid);
           
  //  console.log(this.question.entreprise);   
          }
        )
       // this.entreprise = data;*/

   
    
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
        console.log(this.quest.quesId);
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








 // public Editor = ClassicEditor;
 //question1:FormGroup;
 /*Type:any=['unique','multiple'];
  qId:any;
  qTitle:any;
  question = {
    quiz: {
      qId:0,
    },
    content: '',
    point:'',
    type:String,
  };
  reponset={
     reponse:'',
     estcorrecte:'',
     question :{
        quesId:'',
     },
  };
questrep:any;
questionForm = this.fb.group({
  content: '',
  point:'',
  type:'',
   reponses:this.fb.array([
  ])
 
  // reponses:this.fb.array([
   // this.addReponseFromgroup()
 // ]),    
});
addReponseFromgroup():FormGroup{
  return this.fb.group({
      reponse:['',Validators.required],
      estcorrecte:['',Validators.required],
  });
} 
//questionForm1:FormGroup;
constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private repse:ReponseService,
    private fb:FormBuilder
  ) {
    /*this.questionForm1= this.fb.group({
      content:'',
      point:'',
      type:'',
      reponses1:this.fb.array([
        this.fb.group({
          reponse:'',
          estcorrecte:false,
        })
      ]),
    });
*/   

 /* reponses1():FormArray{
    return this.questionForm1.get("reponses1") as FormArray 
  }*/
  /*changeType(e:any){
    this.type?.setValue(e.target.value,{onlySelf:true});
  }
  get type(){
    return this.questionForm.get('type');
  }
  set quiz(qId:any){
    this.questionForm.setValue(this.quiz['qid']);
  }
  newReponse():FormGroup {
    return  this.fb.group({
      reponse:'',
      estcorrecte:null,
      question:{
        quesId:''
      }
    })
  }
  
 /* addReponse(){
    this.reponses1().push(this.newReponse());
  }
  removeReponse(i:number){
    this.reponses1().removeAt(i);
  }*/
  /*get reponsesfrom(){
  return this.questionForm.controls["reponses"] as FormArray;
  }

  addreponseform(){
    const reponseForm = this.fb.group({
      reponse:'',
      estcorrecte:false,
      question:{
        quesId:0
      }
     });
    this.reponsesfrom.push(reponseForm);
  }
  deleteResponse(reponseindex:number){
    this.reponsesfrom.removeAt(reponseindex);
  }
  //reponses():FormArray{
   // return this.question1.get("reponses") as FormArray
 // }
  newreponse(){
    
  }
  click : boolean = false;
  rep:any;
  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
   // this.question.quiz['qId'] = this.qId;
   //this.questionForm
    //let quizId =this.questionForm.controls['quiz'];
    
    //quizIdqId= this.qId
   // quizId['qId']
    //console.log(quizId?.qId)//=this.qId;
    //this.questionForm.quiz.qid =this.qId;
   // this.questionForm.
   /* this._question.getSinglequestion(this.questrep).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
          console.log(error);
      }
      );*/
  
  /*onButtonClick(){
    this.click = !this.click;

  }
  lenghtreponse(){

  }
  addInputControl(){
   // this.addReponseFromgroup.push(new FormControl())
  }

  formreponse(){
    this.repse.addReponse(this.reponset).subscribe(
      (data)=>{
        console.log(data);
        this.reponset.reponse='';
        this.reponset.estcorrecte='';

      },
      (error)=>{
        console.log(error);
      }
    );
  }


  /*formSubmit() {
    if (this.question.content.trim() == '' || this.question.content == null) {
      return;
    }

   // if (this.question.option1.trim() == '' || this.question.option1 == null) {
    //  return;
    //}
    //if (this.question.option2.trim() == '' || this.question.option2 == null) {
     // return;
    //}
    //if (this.question.note.trim() == '' || this.question.note == null) {
     // return;
    //}

   // if (this.question.answer.trim() == '' || this.question.answer == null) {
   //   return;
    //}

    //form submit
    this._question.addQuestion(this.question).subscribe(
      (data: any) => {
        Swal.fire('Success ', 'Question Added. Add Another one', 'success');
        //this.questrep = data.quesId;
        console.log(data);
        /*this.repse.addReponse(this.reponset).subscribe(
          (data)=>{
            console.log(data);
    
          },
          (error)=>{
            console.log(error);
          }
        );*/
    
      /*  this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
        this.question.point ='';*/
     /* },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error in adding question', 'error');
      }
    );
  }*/
  
  /*formSubmit() {
  // this.quiz(this.qId);
   // this.questionForm.controls.quiz.addAsyncValidators(this.qId);
  this._question.addQuestion(this.questionForm.value).subscribe(
    (data: any) => {
     // data.quiz[this.qId].value=this.qId;
    // data.patchValue({this.quiz.qId : nbt})
     console.log(data);
     console.log(data.quesId);
     //this.question=data;
    // this.question.quiz.qId = this.qId;
     console.log(data);
     let nb = data.reponses.length;
     console.log(nb)
     for(let i=0;i<nb;i++){
      let reponsett = data.reponses
      reponsett.question.quesId=data.quesId;
      console.log(reponsett[i].idreponse);
     }
     //console.log(reponsett.map((i:any)=>i.idreponse));}
      // data = JSON.parse(data);
      // console.log(data);
      /* data.forEach((element:any){
       console.log(element);}*/
    //  if(typeof(data) === "string"){data = JSON.parse(data)}
  /*  data.forEach(function(element:any){
            console.log(element);
        });*/
    /*  data.quiz=this.qId;
     //   data=JSON.parse(data)
     // data.reponses.foreach((data:any)=>{data.reponses.question.quesId = data.quesId;});
        console.log(data)
    
    Swal.fire('Success ', 'Question Added. Add Another one', 'success');   
      // console.log(this.questionForm.value);
   // console.log (JSON.stringify(this.questionForm.value));
    console.log(data);
  },  
  (error) => {
    console.log(error);});

  }.*/
