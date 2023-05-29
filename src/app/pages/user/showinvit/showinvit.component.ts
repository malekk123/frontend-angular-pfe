import { Component, OnInit } from '@angular/core';
import { CampagneService } from 'src/app/services/campagne.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { LoginService } from 'src/app/services/login.service';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';
import { CandidatexamService } from 'src/app/services/candidatexam.service';
import { CandidatmailService } from 'src/app/services/candidatmail.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { RapportComponent } from '../rapport/rapport.component';
import { RapportdetaillComponent } from '../rapportdetaill/rapportdetaill.component';
@Component({
  selector: 'app-showinvit',
  templateUrl: './showinvit.component.html',
  styleUrls: ['./showinvit.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ShowinvitComponent implements OnInit {
  constructor(private camp:CampagneService,private entr:EntrepriseService,
    private login:LoginService,  private ex:ExamenService,private cand:CandidatexamService, private dialogRef : MatDialog,
    private candidat:CandidatmailService,private tostor:ToastrService) { }
    columnsToDisplay = ['name', 'weight', 'symbol', 'notett', 'symbol','nbrcc','position'];
    columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    displayedColumns: string[] = ['position', 'name', 'weight','notett', 'symbol','nbrcc'];  
    
  campagnes=[];
  campagnesact=[];
  candexam=[];
  candidatList=[];
  userid=0;
  entreprise:any;
  campid:any; 
nomCampagne:any;
exam:any=[];
show=false;
  id = 0;
  examid=0;
  ngOnInit(): void {
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userid =data.id ;
         console.log(data);
         console.log(this.userid);
        this.entr.getentrepriseofuser(this.userid).subscribe(
          (entrepris:any)=>{
           console.log(entrepris); 
           this.id= entrepris.entrpriseid;
           this.entreprise=entrepris;
          console.log (entrepris.entrpriseid);
          this.camp.getActiveCampEntre(this.id).subscribe(
            (data:any) =>{
              console.log(data);
              this.campagnesact = data;
              console.log(data[0].campid);
              this.ex.findAllexamofcampagne(data[0].campid).subscribe(
                (data:any)=>{
                        console.log(data);
                        this.exam = data;
                        console.log(data[0].idExam);
                        this.examid = data.idExam;
                        data.forEach((element:any) => {
                          this.cand.getcandidatexambyexam(element.idExam).subscribe(
                            (candex:any)=>{
                              console.log(candex);
                              this.candexam=candex;
                              this.candidat.findCandsbtex(candex).subscribe(
                                (candis:any)=>{
                                  this.candidatList=candis;
                                  
                                  console.log(candis);
                                },(error:any)=>{
                                  console.log(error);
                                }
                              )
                             },(error:any)=>{
                              console.log(error);
                            }
                          )
                       
                        });
                        
                },(error)=>{console.log(error);}
              )
            },
            (error)=>{
              console.log(error);
              Swal.fire('Erreur!','ERREUR dans le telechargement des donnees','error');
            }
            );
            
           /* console.log (this.id);
            this.ex.findAllexamofcampagne(this.campid).subscribe(
              (data:any)=>{
                      console.log(data);
                      this.exam = data;
                      console.log(data.idExam);
                      this.examid = data.idExam;
                   
              },(error)=>{console.log(error);}
            )*/
          }
          )
         // this.entreprise = data;
        },
        (error:any)=>{
          console.log(error);
        }
  
          );
  }
   dataSource=new MatTableDataSource(this.candidatList)

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  showclassement(idExam:any){
    this.show=true;
    const dataSource=new MatTableDataSource(this.candidatList)

  }
  
  getFormattedTime(timer:any) {
    let mm = Math.floor(timer / 60);
    let ss = timer - mm * 60;
    return `${mm} min : ${ss} sec`;
  }
  ajout(idcandidat:any){
    console.log(idcandidat)
  }
  envoieInv(idcandidat:any,token:any,email:any){
    Swal.fire('Invitation renouvellé','Vous voulez reenvoyer l"invitation au candidat','info').then(
      (e)=>{
        /*if(token!=null){
    this.candidat.deleteToken(token).subscribe(
      (data:any)=>{
        console.log(data);
      },(error:any)=>{
        console.log(error);
      }
    );
  }*/

  this.candidat.generateToken(idcandidat).subscribe(
      (tt:any)=>{
        console.log(tt);
        this.candidat.envoyerMailAucandidat(email).subscribe(
          (data:any)=>{
            console.log(data);
          },(error:any)=>{
            console.log(error);
          }
          
          
          );
      },(error:any)=>{
        console.log(error)
      }
    );
   }
    ).then(
      (e)=>{
        this.tostor.success("L invitation est envoyé au candidat","succés");

      }
    )
  
  }
  voir1(tcd:any){
    console.log(tcd)
    this.dialogRef.open(RapportComponent,{data:{tcd}});
  }
  voir2(id2:any){
    this.dialogRef.open(RapportdetaillComponent,{data:{id2}, height: '500px', autoFocus: false,},);
  }
}
