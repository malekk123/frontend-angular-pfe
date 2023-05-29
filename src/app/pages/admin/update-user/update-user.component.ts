import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private usr:UserService,
    private router:Router
  ) { }
  public showPassword: boolean = false;
  id =0;
  user:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //alert (this.id)

    this.usr.getUserById(this.id).subscribe(
      (data:any) =>{
        this.user = data;
        console.log(this.user);
      },
      (error)=>{
          console.log(error);
      }
    )
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  public updateDatauser(){
    this.usr.updateUser(this.user).subscribe(
      (data) =>{
        Swal.fire('succés','utilisateur mis à jour','success').then
        ((e) =>{ 
         this.router.navigate(['/admin/liste entreprise']);
        });
      },
      (error) =>{
        Swal.fire('Error','un problème survenu lors de la mise à jour ', 'error');
        console.log(error);
      }
      
      
     );
  

  }

}
