import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-motdepasseoub',
  templateUrl: './motdepasseoub.component.html',
  styleUrls: ['./motdepasseoub.component.css']
})
export class MotdepasseoubComponent implements OnInit {

  constructor( private us:UserService,private tostor:ToastrService,private router:Router) { }
  loginData = {
    username: '',

  };
  ngOnInit(): void {
  }
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  usernameT='^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
  submitr=false;
  formSubmit(){
     this.us.processForgetMotdepasse(this.loginData.username).subscribe(
      (data:any)=>{
        console.log(data);
      
        this.submitr=true;
        this.tostor.success("Email envoyé à l'utilisateur","Vérifié votre boite de réception");
        this.router.navigate(['/confirmmailpage']);

      },(error)=>{
        console.log(error);
        this.tostor.error("erreur lors de l'envoie","vérifier votre email");
      }
     )
  }
  
}
