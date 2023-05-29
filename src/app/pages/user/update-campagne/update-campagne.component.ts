import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CampagneService } from 'src/app/services/campagne.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-campagne',
  templateUrl: './update-campagne.component.html',
  styleUrls: ['./update-campagne.component.css']
})
export class UpdateCampagneComponent implements OnInit {


  constructor( 
    private route:ActivatedRoute,
    private camp:CampagneService,
    private snack:MatSnackBar,
    private router:Router,
  ) { }

  campid=0;
  campagne:any;

  ngOnInit(): void {
    this.campid = this.route.snapshot.params['campid'];
    this.camp.getCampagne(this.campid).subscribe(
      (data:any)=>{
        this.campagne = data;
        console.log(this.campagne)
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  //update form submit
  public updateData(){

    this.camp.updateCampagne(this.campagne).subscribe(
      (data)=>{
        Swal.fire('Succès','campagne mise à jour','success').then((e) =>{
        this.router.navigate(['/user-dashboard/campagne']);
        });
      },
      (error)=>{
        Swal.fire('ERREUR','error téléchargement','error');
        console.log(error);
      }

    );
  }

}
