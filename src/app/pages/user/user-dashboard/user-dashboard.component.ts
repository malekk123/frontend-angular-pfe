import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  
  user:any;
  userid=0;
  constructor(private login:LoginService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   /* this.user = this.login.getUser();
    this.userid =this.user['userid'];
    this.userid = this.route.snapshot.params['userid'];
   */
  }

}
