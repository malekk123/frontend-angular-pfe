import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import Swal from 'sweetalert2';
import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-nouvelleent',
  templateUrl: './nouvelleent.component.html',
  styleUrls: ['./nouvelleent.component.css']
})
export class NouvelleentComponent implements OnInit {

  constructor(private snack:MatSnackBar,private entre:EntrepriseService,private _router:Router) { }
  entreprise={
    noment:'',
    email:'',
  }
  ngOnInit(): void {
  }
  formSubmit(){
    if (this.entreprise.noment == '' || this.entreprise.noment == null) {
      // alert('User is required !!');
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.entreprise.email == '' || this.entreprise.email == null) {
      // alert('User is required !!');
      this.snack.open('email is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    this.entre.addEntreprise(this.entreprise).subscribe(
      (data:any)=>{
        console.log(data);
        console.log(data);
        Swal.fire('entreprise ajouter','Vous allez maintenant ajouter l administrateur de votre entreprise' ,'success').then(
          (e)=>{
            this._router.navigate(['/signin/'+data.entrpriseid]);
          }
        )
      },(error)=>{
        console.log(error);
        // alert('something went wrong');
        this.snack.open(error.error.text, '', {
          duration: 3000,
        });
      
      }
    )
  }
}
