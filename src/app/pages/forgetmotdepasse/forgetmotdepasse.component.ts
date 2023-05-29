import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgetmotdepasse',
  templateUrl: './forgetmotdepasse.component.html',
  styleUrls: ['./forgetmotdepasse.component.css']
})
export class ForgetmotdepasseComponent implements OnInit {

  constructor(private route:ActivatedRoute,private us:UserService,private router:Router) { }
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  user ={
    password:'',
  }
  tk:any;
  confirmpassword:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams:any) =>{
      const token =queryParams.token;
      console.log(token);
      this.tk=token;
      console.log(this.tk);
    });
  }
 
  formSubmit()
  {
    console.log(this.tk);
    
    this.us.processResetMotdepasse(this.user.password,this.tk).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire('Mot de passe a été mis à jour !!', 'Vous pouvez s authentifier' , 'success').then((result)=>{
          this.router.navigate(['/login']);
        });
       
      },(error:any)=>{
        console.log(error);
      }
    )
 
  }
}
