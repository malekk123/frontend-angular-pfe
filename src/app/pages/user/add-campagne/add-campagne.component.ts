import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CampagneService } from 'src/app/services/campagne.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-campagne',
  templateUrl: './add-campagne.component.html',
  styleUrls: ['./add-campagne.component.css']
})
export class AddCampagneComponent implements OnInit {

  campagneData ={
    nomCampagne:'',
    dateDebut:'',
    dateFin:'',
    active:true,
    archived:false,
    entreprise:{
      entrpriseid:'',
    },
  };
  constructor(
    private camp:CampagneService,
    private snack:MatSnackBar,
    private usr:UserService,
    private login:LoginService,
    private entr:EntrepriseService
  ) { }
  userid=0;
  user:any;
  entrp=0;
  entreprise:any;
  ngOnInit(): void {
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userid =data.id ;
         console.log(data);
         console.log(this.userid);
        this.entr.getentrepriseofuser(this.userid).subscribe(
          (entrepris:any)=>{
           console.log(entrepris); 
           this.entreprise=entrepris;
           this.campagneData.entreprise=this.entreprise
           console.log(this.campagneData.entreprise);
          }
        )
  
       // this.entreprise = data;
      },
      (error:any)=>{
        console.log(error);
      }

        );
    }

  addCampagne(){
    if (this.campagneData.nomCampagne.trim() == '' || this.campagneData.nomCampagne == null) {
      this.snack.open('nom obligeatoire !!', '', {
        duration: 3000,
      });
      return;
    }

    // call server
    this.camp.addCampagne(this.campagneData).subscribe(
      (data)=>{
     
      console.log(data);
      Swal.fire('Succès','campagne ajouté','success').then((result)=>{
        if (result.isConfirmed){
         window.location.href = '/user-dashboard/campagne'

        }
       });
      },
       (error) =>{
       Swal.fire('Erreur','Erreur en ajoutant la campagne','error');
       console.log(error);
     }     
        
        
    );
     

  }
}
