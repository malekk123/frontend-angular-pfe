import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReponseService } from 'src/app/services/reponse.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajouterreponse',
  templateUrl: './ajouterreponse.component.html',
  styleUrls: ['./ajouterreponse.component.css']
})
export class AjouterreponseComponent implements OnInit {

  ques:any;

  reponses:any[] =[{
    reponse:'',
    estcorrecte:false,
    question:{
      quesId: 0,
    }
      }];
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private rep:ReponseService,
  ) {
    this.ques = data.ques;
    console.log(data.ques);
    this.reponses[0].question.quesId = data.ques;
   }
   
  ngOnInit(): void {
    console.log(this.ques);
    console.log(this.ques.quesId) ; 
    
   /* for(let i=0;i<this.reponses.length;i++){
      this.reponses[i].question.quesId == this.ques.quesId;
      console.log(this.reponses);
    }*/     
  }
  attrib(reponses:any,ques:any){
    
    Array.from(reponses).forEach(function(element:any){
      element.question.quesId = ques;
     })
  }
  addreponseform(){
    this.reponses.push({
      reponse:'',
      estcorrecte:false,
      question:{
        quesId: this.ques,
      }
     });
  }
  deleteResponse(i:number){
    this.reponses.splice(i,1);
  }
  Submit(){
   // this.attrib(this.reponses,this.ques);
   this.rep.addallreponseques(this.reponses,this.ques).subscribe(
        (data:any)=>{
       Swal.fire('Succès ', 'Les réponses sont ajoutés', 'success').then(
        (e)=>{
          window.location.reload();
        }
       )
        
          //console.log(data);   
          //this.attrib(this.data,this.ques);          
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
       )
  }
}
