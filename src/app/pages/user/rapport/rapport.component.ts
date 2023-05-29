import { ViewChild,ElementRef,Component, Inject,  OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CandidatmailService } from 'src/app/services/candidatmail.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {


  ques:any;
  cads:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private cand:CandidatmailService) {
    this.ques = data.tcd;
    console.log(data.tcd);
   }

  ngOnInit(): void {
    console.log(this.ques);
    this.cand.findCandidatbyid(this.ques).subscribe(
      (candidat:any)=>{
        console.log(candidat);
        this.cads=candidat;
      },(error:any)=>{
        console.log(error);
      }
    )
  }
  printPage() {
    window.print();
  }
  getFormattedTime(timer:any) {
    let mm = Math.floor(timer / 60);
    let ss = timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }
  onNoClick(): void {
  
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
    pdf.save('rapport.pdf'); 
    });}
}
