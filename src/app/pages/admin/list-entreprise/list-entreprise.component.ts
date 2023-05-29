import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.css']
})
export class ListEntrepriseComponent implements OnInit {
entreprise=[];
  constructor(private entrep:EntrepriseService) { }

  ngOnInit(): void {
    this.entrep.getAllentreprise().subscribe(
      (data:any)=>{
        this.entreprise = data;
        console.log(this.entreprise)
        console.log(data.entrpriseid)
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !', 'Pas  de données !', 'error');

      }
    );
  }
  delete(entrepriseid:any){
    Swal.fire({
      icon:'warning',
      title:'Vous etes sure de supprimer ce compte',
      confirmButtonText:'Supprimer',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed){
        //delete..
        this.entrep.delete(entrepriseid).subscribe(
          (data) =>{
            this.entreprise = this.entreprise.filter((entrep)=> entrep['entrepriseid'] != entrepriseid);
            Swal.fire('Supprimé','Entreprise supprimée','success').then((result)=>{
              window.location.reload();
            });
            
          },
          (error)=>{
            Swal.fire('Error','entreprise non supprimée','error' );
          }
          );
        
      }
    
    });
    
  }


}
