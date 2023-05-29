import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';
import { ExamenService } from 'src/app/services/examen.service';
import { interval, TimeInterval } from 'rxjs';
@Component({
  selector: 'app-voirquest',
  templateUrl: './voirquest.component.html',
  styleUrls: ['./voirquest.component.css']
})
export class VoirquestComponent implements OnInit {
   question={
    content:'',
    type:'',
    examen:{
      idExam:0,
    },
   
   }
   reponse={
    reponse:'',
    estcorrecte:false,
    question:{
      quesid:0,
    }
   }
   reponses:any=[];
   questions=[];
   public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  constructor(
    private location:Location,
    private route:ActivatedRoute,
    private ques:QuestionService,
    private ex:ExamenService,
    private rep:ReponseService,
  ) { }
  idexam=0;
  examen:any;
  ngOnInit(): void {
    this.idexam = this.route.snapshot.params['quesid'];
    this.ques.getQuestionofExam(this.idexam).subscribe(
      (data:any)=>{
        console.log(data);
        this.questionList=data
        data.forEach((ques:any)=>{
          console.log(ques);
          this.points+=ques.point;
          console.log(this.points)
          console.log(ques.quesId);
          /*this.rep.getReponseofQuestion(ques.quesId).subscribe(
            (repp:any)=>{
              this.reponses=repp;
              console.log("reponses");
              console.log(this.reponses);
            },
            (error)=>
            {
              console.log(error);
            }
          )*/
        })
       // console.log(data.)

      },(error:any)=>{
        console.log(error);
      });
    
       /* this.questionList.forEach((q:any)=>{
          this.rep.getReponseofQuestion(q.quesid).subscribe(
            (rep)=>{
              console.log(rep)
            }
          )
        })
      },(error)=>{
        console.log(error);
      }*/
    
    this.ex.getSingleexam(this.idexam).subscribe(
      (data:any)=>{
        console.log(data);
        this.examen=data;
        this.counter = data.duree*60;
      },(error)=>{
        console.log(error);
      }
    )
    this.startCounter()
  }

  public back():void{
    this.location.back();
   }
   nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  totalpoint(){
    this.questionList.forEach((q:any)=>{
      this.points=q.point+this.points;
    })
  }
  answer(currentQno: number, option: any) {

    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.estcorrecte==true) {
      this.points += this.questionList[currentQno].point;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);


    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 1;
    }
  }
  
getFormattedTime() {
  // let mm= this.timer;
   let mm = Math.floor(this.counter / 60);
   let ss = this.counter - mm * 60;
   return `${mm} min : ${ss} sec`;
 }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe((val:any) => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = this.counter*60;
          this.points -=1;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    //this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";

  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }
}
