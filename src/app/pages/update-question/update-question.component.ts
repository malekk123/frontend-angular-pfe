import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private quest:QuestionService,
    private location:Location,
    private router:Router
  ) { }
  quesId=0;
  question:any;
  typeList = ['unique','multiple'];

  ngOnInit(): void {
    this.quesId = this.route.snapshot.params['quesId'];
    this.quest.getSinglequestion(this.quesId).subscribe(
      (data:any)=>{
        this.question = data;
        console.log(this.question);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
 
  public updateData(){
      this.quest.update(this.question).subscribe(
        (data)=>{
          Swal.fire('Success !!', 'question updated', 'success').then((e) => {
           this.location.back()
          });  
        },
        (error)=>{
          Swal.fire('Error', 'error dans la mise à jour', 'error');
          console.log(error);
        
        }
      );
  }

back(){
  this.location.back();
}
mettrejour(id:any){
  
}
}


