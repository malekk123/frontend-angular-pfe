import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfigmailComponent } from '../configmail/configmail.component';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
  
  constructor(private _router:Router, private dialogRef : MatDialog,private usern:UserService) { }
  users:any= [];
  user={
    username:'',
    firstName:'',
    lastName:''
  }

  ngOnInit(): void {
    this.usern.getAllcandidat().subscribe(
      (data)=>{
        console.log(data);
        this.users=data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  CreateUser:string = "Entrer l'email du candidat"

   userlist = Array();

  onclick(prouser:any){
    
    if(prouser.value.length > 0)
    {
      this.userlist.push(prouser.value);
      prouser.value = '';
    }
  }
  envoyerinvitation(email:any){
    
    this.dialogRef.open(ConfigmailComponent,{data:{email}});

  }
  
  ondelete(deleteme:any)
  {
   // this.userlist.splice(deleteme,1);
   this.usern.deleteUser(deleteme).subscribe(
    (data) => {
     
      this.userlist = this.userlist.filter((us) => us['id'] != deleteme);
      Swal.fire('Succés ','Invitation supprimé','success').then(
        (e)=>
        {
          console.log(data);
        this.user={
          username:'',
          firstName:'',
          lastName:''
        }
        window.location.reload()
        }
      )
    },

    (error) => {
      Swal.fire('Erreur','L invitation n a pas été supprimé','error');
      console.log(error);
    }
  );

  /*  Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'supprimer',
      title: 'Vous êtes sûre de vouloir supprimer le candidat?',
    }).then((result) => {
      if (result.isConfirmed) {
        //confim
        this.usern.deleteUser(deleteme).subscribe(
          (data) => {
            Swal.fire('Succés ','Invitation supprimé','success');
            this.userlist = this.userlist.filter((us) => us['id'] != deleteme);
          },

          (error) => {
            Swal.fire('Erreur','L invitation n a pas été supprimé','error');
            console.log(error);
          }
        );
      }
    });
  
    this.usern.deleteUser(deleteme).subscribe(
      (data)=>{
      Swal.fire()
        console.log(data);
      }
    )*/
  }
  formSubmit(){
    this.usern.addCandidat(this.user).subscribe(
      (data)=>{
      Swal.fire('Succés','Candidat ajouté','success').then(
        (e)=>
        {
          console.log(data);
        this.user={
          username:'',
          firstName:'',
          lastName:''
        }
        window.location.reload()
        }
      )
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
