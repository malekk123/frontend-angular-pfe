import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import Swal from 'sweetalert2';
import {fromEvent} from 'rxjs';
import {merge} from 'rxjs';
import {debounce, map} from 'rxjs/operators';
import {timer} from 'rxjs';
import { Observable } from 'rxjs';
import { CandidatexamService } from 'src/app/services/candidatexam.service';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';
import { CandrepService } from 'src/app/services/candrep.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CandidatmailService } from 'src/app/services/candidatmail.service';
@Component({
  selector: 'app-espace-candidat',
  templateUrl: './espace-candidat.component.html',
  styleUrls: ['./espace-candidat.component.css']
})
export class EspaceCandidatComponent implements OnInit {
  candidat={
    reponse:'',
  };
 
  idcand:any;
  recp:any='';
  i:number=0;
  progress: string = "0";
 loading =false;
  repcandidats:any[]=[{
   repcand:null,
   scoreparq:0,
   indice:0,
   candidatexam:{
    idcandidat:0,
   },
   question:{
    quesId:0,
   }
  }];
  candidatexam={
    idcandidat:'',
    timer:'',
   }
  lanote=0;
  correcteReponse=0;
  Reponserepondu=0;

  rep1='';
  questions:any;
  isSubmit = false;
  t5=10;
  timer:any;
  tk:any;
  id:any;
  reponsesq:any;
  public currentQuestion: number = 0;
  public currentnum : number=1;
  time:any;
  constructor(private quest:QuestionService,private rep:ReponseService,private can:CandidatexamService,
    private route:ActivatedRoute,private locationSt: LocationStrategy,private _router:Router,
    private repcand:CandrepService,private tostor:ToastrService,private cadm:CandidatmailService,
    private ngxLoader:NgxUiLoaderService,private http:HttpClient) { }
  ngOnInit(): void {
    this.tk = this.route.snapshot.params['tk'];
    console.log(this.tk);
    this.can.getcandidatbytoken(this.tk).subscribe(
      (candidat:any)=>{
        console.log(candidat);
        this.idcand=candidat.idcandidat;
        this.candidatexam.idcandidat=this.idcand;
        this.time=this.candidatexam.timer;
        console.log(this.time);
        console.log(this.candidatexam);
        console.log(this.idcand);
        this.id=candidat.examen.idExam;
        console.log(this.idcand);
        this.quest.getQuestionofExam(this.id).subscribe(
          (data:any)=>{
            console.log(data);
       //     console.log(data[1].reponses[1].reponse);
            this.questions=data;
            console.log(this.questions.length);
            this.loading=true;
            this.cadm.deleteToken(this.tk).subscribe(
              (data:any)=>{
                console.log(data);
              },(error:any)=>{
                console.log(error);
              }
             )
          },(error:any)=>{
            console.log(error);
          }
        )
       
        console.log(candidat.examen.idExam)
      },(error:any)=>{
        console.log(error);
      }
    )
    
    this.preventBackButton();
    this.bindKeypressEvent().subscribe(($event: KeyboardEvent) => this.onKeyPress($event));

   this.timer=10 * 60;
   this.startTimer()
 
 
 
  }

   addrep(rep:any,reponse:any,id:any,j:number){
    this.repcandidats.push({
      repcand:reponse,
      scoreparq:j,
      indice:rep,
      candidatexam:{
        idcandidat:this.idcand,
       },
   question:{
    quesId:id,
   }  

    })
    
  }
  result(rep:any,reponse:any,id:any,type:any,j:number){
    //console.log(type);
    //console.log(j);
   // console.log(type==="unique");
      //console.log(this.repcandidats.includes(reponse,j));
      console.log(this.repcandidats.find(elem => elem.question.quesId === id));
      if(!this.repcandidats.find(elem => elem.question.quesId === id)){
        this.addrep(rep,reponse,id,j);
        console.log(this.repcandidats)
      }else{
        let t=this.repcandidats.findIndex((elem:any)=>elem.question.quesId===id);
        console.log(t);
        console.log(j);
        this.repcandidats.splice(t,1,this.repcandidats[t]={
          repcand:reponse,
          scoreparq:j,
          indice:rep,
          candidatexam:{
            idcandidat:this.idcand,
           },
       question:{
        quesId:this.id,
       }  
    
      });
      console.log(this.repcandidats)
      }
     }

  addrepcandform(){
    this.repcandidats.push({
      repcand:'',
      scoreparq:'',
      candidatexam:{
        idcandidat:this.idcand,
       },
   question:{
    quesId:0,
   }  
    })
  }

  resultM(rep:any,reponse:any,id:any,type:any,j:number){
    console.log(this.repcandidats);
    let t=this.repcandidats.findIndex((elem:any)=>elem.repcand===rep);
    console.log(this.repcandidats.findIndex((elem:any)=>elem.repcand===rep))
        console.log(this.repcandidats.find(elem => elem.repcand === rep))
        if(!this.repcandidats.find(elem => elem.repcand === rep)){
          this.addrep(rep,reponse,id,j);
          console.log(this.repcandidats);
        }else{
       this.repcandidats.splice(t,1);
       console.log(this.repcandidats);

        }

  }
  preventBackButton() {
   history.pushState(null, '', location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  
  
  }
  nextQuestion() {   
    this.i++;
    this.currentnum++;
    this.getProgressPercent();
  }

  previousQuestion() {
    this.i--;
    this.currentnum--;
    this.getProgressPercent();
  }

  getProgressPercent() {
    this.progress = ((this.currentnum / this.questions.length) * 100).toString();
    return this.progress;
  }

  submit(){
    
    //console.log(this.repcandidats);
    this.repcandidats.splice(0,1);
    console.log(this.repcandidats);
    Swal.fire('Avez vous fini?','Si vous confirmer vous n aurez plus le droit de y revenir','question').then((e=>{
      console.log('fait');
   
      this.repcand.addrepcan(this.repcandidats,this.id,this.idcand).subscribe(
        (data:any)=>{
          console.log(data);

        },(error:any)=>{
          console.log(error);
        });
      }
    )
    ).then(
      (e)=>{
        this.timer =this.timer-this.time;
        /**/ this.isSubmit=true;
        this.can.updatetimer(this.idcand,this.timer).subscribe(
          (cand:any)=>{
            console.log(cand);
          
          },(error:any)=>{
            console.log(error);
          }
        );  
      }
    )
  
    
  }

  onKeyPress($event: KeyboardEvent) {
    if(($event.ctrlKey || $event.metaKey) && $event.keyCode == 67)
    {Swal.fire(
      'Oops',
      'Vous n"avez pas le droit de copier l"énoncé ?',
      'error'
    ) ;   
    console.log('CTRL + C');
    }
    if(($event.ctrlKey || $event.metaKey) && $event.keyCode == 86)
        console.log('CTRL +  V');
    if (($event.ctrlKey || $event.metaKey) && $event.keyCode == 84)
    console.log('CTRL +  T');
}

private bindKeypressEvent(): Observable<KeyboardEvent> {
    const eventsType$ = [
        fromEvent(window, 'keypress'),
        fromEvent(window, 'keydown')
    ];
    // we merge all kind of event as one observable.
    return merge(...eventsType$)
        .pipe(
            // We prevent multiple next by wait 10ms before to next value.
            debounce(() => timer(10)),
            // We map answer to KeyboardEvent, typescript strong typing...
            map(state => (state as KeyboardEvent))
        );
}

startTimer() {
  let t = window.setInterval(() => {
    //code
    if (this.timer <= 0) {
  this.isSubmit=true;
    //this._router.navigate(['home']);
    clearInterval(t);
    } else if(this.timer <120){
      this.timer--;
      this.tostor.warning("votre temps va s'écouler veuillez accélérer !!!");
      
    }else{
      this.timer--;
    }
  }, 1000);
}



getFormattedTime() {
 // let mm= this.timer;
  let mm = Math.floor(this.timer / 60);
  let ss = this.timer - mm * 60;
  return `${mm} min : ${ss} sec`;
}

evalQuiz() {
  //calculation
}


}
