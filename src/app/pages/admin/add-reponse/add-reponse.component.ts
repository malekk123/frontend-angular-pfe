import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-add-reponse',
  templateUrl: './add-reponse.component.html',
  styleUrls: ['./add-reponse.component.css']
})
export class AddReponseComponent implements OnInit {
 public reponseForm:FormGroup;
  constructor(
    private repse:ReponseService,
    private fb:FormBuilder
  ) { 
    this.reponseForm = this.fb.group([
     //reponses:this.fb.array([this.createReponse()])
    ]);
  }
  reponset={
    reponse:'',
    estcorrecte:'',
    question :{
       quesId:'',
    }}
    createReponse():FormGroup{
     return this.fb.group({
      reponse:'',
      estcorrecte:'',
     })
    
  }
 
  ngOnInit(): void {
  }

}
