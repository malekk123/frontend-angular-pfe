import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],

})
export class SignupComponent implements OnInit {

  constructor(private tostor:ToastrService,private router:Router,private userService: UserService,private entre:EntrepriseService, private snack: MatSnackBar,private route:ActivatedRoute) { }
 public  entreprise={
    noment:'',
    email:'',
  }
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  usernameT='^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
  confirmpassword:any;
  public user ={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    adresse:'',
    //confirmpassword:'',
    /*entreprise:{
      entrpriseid:0,
    }*/
  };

  entrpriseid=0;
  ngOnInit(): void {
   /* this.entrpriseid = this.route.snapshot.params['entrpriseid'];
    this.user.entreprise.entrpriseid = this.entrpriseid;
  */}

  formSubmitentre(){
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
            //this._router.navigate(['/signin/'+data.entrpriseid]);
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
  formSubmit() {
   // console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      // alert('User is required !!');
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      this.tostor.error("email requie","vérifier votre email");
      return;
    }

   /* if (this.user.password == '' || this.user.password == null) {
      // alert('User is required !!');
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }*/
    /*
    if(this.user.confirmpassword==''|| this.user.confirmpassword== null){
      this.snack.open('Confirmer mot de passe !!','',{
        duration:3000,
      });
      return;
    }*/
    //validate

    //addUser: userservice
    this.userService.addUserWithEntreprise(this.user,this.entreprise.noment).subscribe(
      (data: any) => {
        //success
        console.log(data);
        this.userService.confirmUserAccount(data['id']).subscribe(
          (datatype:any)=>{
            console.log(datatype);
            this.tostor.success("Email envoyé à l'utilisateur","Vérifié votre boite de réception")
            Swal.fire('Vous êtes enregistrer  !!', 'Vous vérifier votre boite d email' , 'success').then((result)=>{
              this.router.navigate(['/confirmmailpage']);
            });
          },(error:any)=>{
            console.log(error);
            this.tostor.error("Email non envoyé ","Il y a un problème");
          }
          )
        
        
        //alert('success');
      /*  Swal.fire('Successfully done !!', 'User id is ' + data.id, 'success').then(
          (e)=>{
            window.location.href = '/login'; 
          }
        )
        */       
      },
      (error) => {
        //error
        console.log(error);
        this.tostor.error("Un problème est sourvenu","enregistrement échoué")
        // alert('something went wrong');
        this.snack.open(error.error.text, '', {
          duration: 3000,
        });
      }
    );
  }

  //this.user
}
