import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { ReCaptcha2Component } from 'ngx-captcha/lib';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  export class LoginComponent implements OnInit {
   /* @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
    @ViewChild('langInput')langInput: ElementRef;
*/
public aFormGroup: FormGroup|any;
    loginData = {
      username: '',
      password: '',
      recaptcha:''
      };
    recaptcha:any;
    passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
    usernameT='^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
    captchaError:Boolean =false;
    
    public captchaIsLoaded = false;
    public captchaSuccess = false;
    public captchaIsExpired = false;
    public captchaResponse?:string;

    public theme:'light' | 'dark' ='light';
    public size :'compact' | 'normal' ='normal';
    public lang ='en';
    public type:'image' | 'audio'='image';
    constructor(
      private snack: MatSnackBar,
      private login: LoginService,
      private router: Router,
      public formBuilder:FormBuilder,
      private tostor:ToastrService
    ) {}
  
    ngOnInit(): void {
      
      this.aFormGroup =this.formBuilder.group({
        recaptcha:['',Validators.required]
      })
    }
    siteKey:string="6Ld7d6oiAAAAAC2CTNjEbtnEwKpBxxNcMRVoru1O";
    
   /* handleSuccess(data:any){
      console.log(data);
    }
    handleReset():void{
    //  this.resetCaptcha();
    }*/

    formSubmit() {
      console.log('login btn clicked');
  
      if (
        this.loginData.username.trim() == '' ||
        this.loginData.username == null
      ) {
        this.snack.open('Username is required !! ', '', {
          duration: 3000,
        });
        return;
      }
  
      if (
        this.loginData.password.trim() == '' ||
        this.loginData.password == null
      ) {
        this.snack.open('Password is required !! ', '', {
          duration: 3000,
        });
        return;
      }
  
      //request to server to generate token
      this.login.generateToken(this.loginData).subscribe(
        (data: any) => {
          console.log('success');
          console.log(data);
   
            this.snack.open("Login réussi", "OK", {
              duration: 3000,
              panelClass: ['green-snackbar', 'login-snackbar'],
             });
            
          //login...
          this.login.loginUser(data.token);
  
          this.login.getCurrentUser().subscribe((user: any) => {
            this.login.setUser(user);
            console.log(user);
            //redirect ...ADMIN: admin-dashboard
            //redirect ...NORMAL:normal-dashboard
            //redirect ...CANDIDAT : candidat-dashbordcd
            if (this.login.getUserRole() == 'ADMIN') {
              //admin dashboard
               window.location.href = '/admin';
             // this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
            } else if (this.login.getUserRole() == 'NORMAL') {
              //normal user dashbaord
               window.location.href = '/user-dashboard';
              //this.router.navigate(['user-dashboard/0']);
              this.login.loginStatusSubject.next(true);
            }else if (this.login.getUserRole()=='CANDIDAT'){
              //candidat user dashborord
                window.location.href='/candidat';
                this.login.loginStatusSubject.next(true);
            } else {
              this.login.logout();
            }
          });
        },
        (error) => {
          console.log('Error !');
          console.log(error);
          this.snack.open('Invalid Details !! Try again', '', {
            duration: 3000,
          });
          this.tostor.error("vérifier votre email ou mot de passe","erreur");

        }
      );
      }
}
