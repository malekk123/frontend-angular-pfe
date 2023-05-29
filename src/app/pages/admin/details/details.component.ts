import { Component, OnInit,Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';  
import { ListUserComponent } from '../list-user/list-user.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  us:any;
  id:number;
  user:any;
  constructor(private usn:UserService, @Inject(MAT_DIALOG_DATA) public  data:any) {  
    this.id = data.id;
    console.log(data.id);
    console.log(this.id);  
} 

  ngOnInit(): void {
    this.usn.getUserById(this.id).subscribe((result)=>{
      this.user= result;
      console.log(this.user);
    },
    (error)=>{
      console.log(error);
    });
     
    }
    close(){
      this.close();
    }
  }


