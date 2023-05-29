import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'
import { DetailsComponent } from '../details/details.component';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {
  userN =[];
  
  constructor(private usn:UserService,
    public dialog: MatDialog,
    private router:Router,
    private route:ActivatedRoute,
    private location:Location) {}
  entrpriseid:any;
  noment:any;
  ngOnInit(): void {
    this.entrpriseid = this.route.snapshot.params['entrpriseid'];
    this.noment = this.route.snapshot.params['noment'];
    this.usn.getuserByEntreprise(this.entrpriseid).subscribe(
      (data:any)=>{
        this.userN = data;
        console.log(this.userN);
      },
     (error) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');

      }

    );
  }
 
  onCreate(){

  }

  details(id:any){
   /* const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "70%"
    dialogConfig.data={id: data.id};
    */this.dialog.open(DetailsComponent,{data:{id}});
    
  }
  edit(data:any){

  }
  back(){
    this.location.back();
  }
  
  delete(id:any){
    Swal.fire({
        icon:'warning',
        title:'Vous etes sûre de vouloir supprimer ce compte?',
        confirmButtonText:'Supprimer',
        showCancelButton:true,
         }).then((result)=>{
           if(result.isConfirmed){
            //delete..
            this.usn.deleteUser(id).subscribe(
            (data) =>{
            this.userN = this.userN.filter((usn)=> usn['id'] != id);
            Swal.fire('Supprimé','ce compte est supprimé','success');
          },
           (error)=>{
            Swal.fire('Error','Ce compte n a pas été supprimé','error' );
          });
      }
    });
  }
}
