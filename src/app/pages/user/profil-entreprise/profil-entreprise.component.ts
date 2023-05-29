import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { entreprise } from 'src/app/models/entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../../login/login.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.css']
})
export class ProfilEntrepriseComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private entr:EntrepriseService,
    private router:Router,
    private usr:UserService,
    private login:LoginService
  ) { }
  user:any;
  entrepriseid=0;
  entreprise:any;
  userid=0;
  ngOnInit(): void {
 //   this.user = this.login.getUser();
   // console.log(this.user);
//    this.usr.getUserById(this.user);
//   this.userid =this.route.snapshot.params['userId'];
  // console.log(this.userid); 

   this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.userid =data.id ;
         console.log(data);
         console.log(this.userid);
        this.entr.getentrepriseofuser(this.userid).subscribe(
          (entrepris:any)=>{
           console.log(entrepris); 
           this.entreprise=entrepris;
          }
        )
       // this.entreprise = data;
      },
      (error:any)=>{
        console.log(error);
      }

        );
  
}

  public update(){
    this.entr.updateEntreprise(this.entreprise).subscribe(
      (data) => {
        Swal.fire('Success !!', 'entreprise profil enregistrée ', 'success').then((e) => {
          
        });
      },
      (error) => {
        Swal.fire('Error', 'error dans l enregistrement', 'error');
        console.log(error);
      }
    );
   
  

  }
}
