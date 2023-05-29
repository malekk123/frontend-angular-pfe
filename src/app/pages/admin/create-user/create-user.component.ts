import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public showPassword: boolean = false;
  constructor(private userService: UserService, 
    private snack: MatSnackBar,
    private location:Location,
    private router:Router,
    private route:ActivatedRoute) {}
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    adresse:'',
    entreprise:{
      entrpriseid:'',
    },
  };
 entrpriseid:any;
 noment:any;
  ngOnInit(): void {
    this.entrpriseid = this.route.snapshot.params['entrpriseid'];
    this.noment = this.route.snapshot.params['noment'];
    this.user.entreprise.entrpriseid=this.entrpriseid;
  } 
  
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  formSubmit(){
    if (this.user.username == '' || this.user.username == null) {
      // alert('User is required !!');
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      // alert('User is required !!');
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        //alert('success');
        Swal.fire('Succès !!', 'User id is ' + data.id, 'success');
       // this.location.back();
       //this.router.navigate(['/admin/entreprise/:entrpriseid/:noment/user'])
         this.user.username ='';
         this.user.password='';
         this.user.adresse='';
         this.user.email='';
         this.user.firstName='';
         this.user.lastName='';
         this.user.phone='';
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        this.snack.open(error.error.text, '', {
          duration: 3000,
        });
      }
    );
    
  }
   back(){
    this.location.back();

   } 
  }

