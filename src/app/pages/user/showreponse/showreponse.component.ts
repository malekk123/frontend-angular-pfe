import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReponseService } from 'src/app/services/reponse.service';
@Component({
  selector: 'app-showreponse',
  templateUrl: './showreponse.component.html',
  styleUrls: ['./showreponse.component.css']
})
export class ShowreponseComponent implements OnInit {
  ques:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private rep:ReponseService,) { 
    this.ques = data;
    console.log(this.ques.quesId);
  }
  reponses=[];
  ngOnInit(): void {
    this.rep.getReponseofQuestion(this.ques.quesId).subscribe(
      (data:any)=>{
        console.log(data);
        this.reponses=data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
