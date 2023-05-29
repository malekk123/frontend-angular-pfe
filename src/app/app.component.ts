import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'campagne';
  
  constructor(private snackBar:MatSnackBar){}
  // Snackbar that opens with success background
openSuccessSnackBar(){
  this.snackBar.open("Login réussi", "OK", {
    duration: 3000,
    panelClass: ['green-snackbar', 'login-snackbar'],
   });
  }
  //Snackbar that opens with failure background
  openFailureSnackBar(){
  this.snackBar.open("Invalid Login Credentials", "essayer une autre fois!", {
    duration: 3000,
    panelClass: ['red-snackbar','login-snackbar'],
    });
   }
  }
  
