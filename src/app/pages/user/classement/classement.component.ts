import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { CandidatexamService } from 'src/app/services/candidatexam.service';
import { ActivatedRoute } from '@angular/router';
import { CandidatmailService } from 'src/app/services/candidatmail.service';
@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  constructor(private usern:UserService,
  private can:CandidatmailService,
  private candexam:CandidatexamService,
  private cand:CandidatmailService,
  private route:ActivatedRoute) { }
  users:any= [];
  selectcheckt=false;
  selectcheckt2 =false;
  candidat={
    email:'',
    nom:'',
    prenom:''
  }
  canditexam={
    user:{
      id:0,
      username:'',
      firstName:'',
      lastName:'',
    },
    examen:{
      idExam:0,
    },
    candidat:{
       idCandidat:0,
       email:'',
       nom:'',
       prenom:''
    },
    notetotale:0,
    numcorrectanswer:0,
    numquestionattempted:0,
    tag:'',
  }
  examid:any;
  candidatexam:any=[];
  candidatList:any;
  ngOnInit(): void {
    this.examid=this.route.snapshot.params['idExam'];
    selected:false
   /* this.candexam.getcandidatexambyexam(this.examid).subscribe(
      (data:any)=>{
        console.log(data);
        this.candidatexam=data;
      },(error)=>{
        console.log(error);
      }
    )*/
    this.candexam.getcandidatexambyexam(this.examid).subscribe(
      (candex:any)=>{
        console.log(candex);
        this.candexam=candex;
        this.cand.findCandsbtex(candex).subscribe(
          (candis:any)=>{
            this.candidatexam=candis;
            
            console.log(candis);
          },(error:any)=>{
            console.log(error);
          }
        )
       },(error:any)=>{
        console.log(error);
      }
    )
 
  }
  
  formSubmit(){
    this.can.addCandidat(this.candidat).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire('Succés','Candidat ajouté','success').then(
          (e)=>
          {
            console.log(data);
            this.canditexam.examen.idExam=this.examid;
          this.canditexam.candidat.idCandidat=data.idCandidat;
          this.candexam.addcandidatexam(this.canditexam).subscribe(
            (candidatexam:any)=>{
              console.log(candidatexam);
            },(error)=>{
              console.log(error);
            }
          )
          this.candidat={
          email:'',
          nom:'',
          prenom:''
        }
        window.location.reload()
        }
      )
        
      },
      (error)=>{
        console.log(error);
      }
    )

          
      
    
    /*this.usern.addCandidat(this.user).subscribe(
      (data:any)=>{
      Swal.fire('Succés','Candidat ajouté','success').then(
        (e)=>
        {
          console.log(data);
          this.canditexam.examen.idExam=this.examid;
          this.canditexam.user.id=data.id;
          this.candexam.addcandidatexam(this.canditexam).subscribe(
            (candidatexam:any)=>{
              console.log(candidatexam);
            },(error)=>{
              console.log(error);
            }
          )
          this.user={
          username:'',
          firstName:'',
          lastName:''
        }
        window.location.reload()
        }
      )
        
      },
      (error)=>{
        console.log(error);
      }
    )*/
  }
  select(){
    this.selectcheckt=true;
    this.selectcheckt2=false;
  }
  select2(){
    this.selectcheckt2=true ;
    this.selectcheckt=false;
  }
}
