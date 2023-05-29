import { Component, OnInit } from '@angular/core';
import { CampagneService } from 'src/app/services/campagne.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-campagne',
  templateUrl: './campagne.component.html',
  styleUrls: ['./campagne.component.css']
})
export class CampagneComponent implements OnInit {
  campagnesact =[];
  campagnesarch =[];
  campagnes=[];
  userid=0;
  entreprise:any;
  id = 0;
  constructor(private camp:CampagneService,private entr:EntrepriseService,
    private login:LoginService) { }

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
              this.campagnesact = data;
              console.log(this.campagnesact);
            },
            (error)=>{
              console.log(error);
              Swal.fire('Erreur!','ERREUR dans le telechargement des donnees','error');
            }
            );
      
            console.log (this.id);

            this.camp.getArchivedCampEntre(this.id).subscribe(
              (data:any)=>{
                this.campagnesarch = data;
                console.log(this.campagnesarch);
              },
              (error)=>{
                console.log(error);
                Swal.fire('Erreur','ERREUR telechargement','error');
              }
              );
       
        
        }
        )
       // this.entreprise = data;
      },
      (error:any)=>{
        console.log(error);
      }

        );
  
 
   
        this.camp.campagnes().subscribe(
          (data:any)=>{
            this.campagnes = data ;
            console.log(this.campagnes);
          },
          (error)=>{
            console.log(error);
            Swal.fire('Erreur','Erreur telechargement','error');
          }

        );
      }

    
  
details(campagneid:any){

}

delete(campagneid:any){

  Swal.fire({
    icon:'warning',
    title:'Vous etes sure de supprimer ce compte',
    confirmButtonText:'Supprimer',
    showCancelButton:true,
  }).then((result)=>{
    if(result.isConfirmed){
      //delete..
      this.camp.deleteCampagne(campagneid).subscribe(
        (data) =>{
          this.campagnes = this.campagnes.filter((camp)=> camp['campagneid'] != campagneid);
          Swal.fire('Supprimé','cette campagne est supprimé','success').then((result)=>{
            if (result.isConfirmed){
              window.location.reload();
 
            }
        });
        },
        (error)=>{
          Swal.fire('Error','Ce campagne n a pas été  supprimé','error' );
        }
        );

    }
      
});

}

}

 