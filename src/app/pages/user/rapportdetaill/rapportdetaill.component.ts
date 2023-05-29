import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CandidatmailService } from 'src/app/services/candidatmail.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-rapportdetaill',
  templateUrl: './rapportdetaill.component.html',
  styleUrls: ['./rapportdetaill.component.css'],
 
})
export class RapportdetaillComponent implements OnInit {
id:any;

id2:any;
cads:any;
questions:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private cand:CandidatmailService,private quest:QuestionService) { 
    this.id2 = data.id2;
    console.log(data.id2);

  }

  ngOnInit(): void {
    this.cand.findCandidatbyid(this.id2).subscribe(
      (candidat:any)=>{
        console.log(candidat);
        this.cads=candidat;
        this.id=candidat.candidatexam.examen.idExam;
        this.quest.getQuestionofExam(this.id).subscribe(
        
          (data:any)=>{
            console.log(data);
   
            this.questions=data;
            console.log(this.questions)
            console.log(this.questions.length);
          },(error:any)=>{
            console.log(error)
          })
        
      },(error:any)=>{
        console.log(error);
      }
    )
  }
  makepdf(){
    const content = document.getElementById('content')as HTMLElement;
    html2canvas(content).then(canvas => {
    const imgWidth = 208;
    const pageHeight = 295;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    const heightLeft = imgHeight;
    const contentDataURL = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4'); 
    const position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    pdf.save('rapportdetaille.pdf'); 
    });}
}
