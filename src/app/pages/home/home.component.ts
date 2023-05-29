import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //protected aFormGroup: FormGroup ;
  public aFormGroup: FormGroup|any;
  constructor(public formBuilder:FormBuilder) { }
   siteKey:string="6Ld7d6oiAAAAAC2CTNjEbtnEwKpBxxNcMRVoru1O";
  

   
  ngOnInit(): void {
  
    
    this.aFormGroup =this.formBuilder.group({
      recaptcha:['',Validators.required]
    })
  
  
  }

  
}
