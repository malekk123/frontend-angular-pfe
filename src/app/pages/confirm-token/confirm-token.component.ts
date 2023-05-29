import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirm-token',
  templateUrl: './confirm-token.component.html',
  styleUrls: ['./confirm-token.component.css']
})
export class ConfirmTokenComponent implements OnInit {

  emailConfirmation:boolean=false;
  
  constructor(private route:ActivatedRoute,private us:UserService) { }

  ngOnInit(): void {
   
    this.route.queryParams.subscribe((queryParams:any) =>{
      const token =queryParams.token;
      console.log(token);
    

    this.us.confirmerUserAccount(token).subscribe(
    (data:any)=>{
      console.log(data);
      this.emailConfirmation =true;
    },(error)=>{
      console.log(error);
    }
    )
  } )
  }




}
