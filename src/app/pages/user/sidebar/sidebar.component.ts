import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  panelOpenState = false;
  categories:any;
  isLoggedIn = true;
  //user = null;
  constructor(public login: LoginService,private _cat:CategoryService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        this._snack.open('Error in loading categories from server', '', {
          duration: 3000,
        });
      }
    );
  }
  
  public logout() {
    this.login.logout();
     window.location.reload();
     // this.login.loginStatusSubject.next(false);
   }
   



}
