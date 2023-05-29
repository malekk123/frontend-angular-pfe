import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  user=null;
  id=0;
  constructor(private _router:Router,private route:ActivatedRoute,private login:LoginService) { }
  tk:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams:any) =>{
      const token =queryParams.token;
      this.tk= token;

      console.log(token);
      console.log(this.tk);
    });
   
  }

  startQuiz(){
    //this._router.navigate(['candidat/examcandidat']);
    Swal.fire({
      title: 'Vous êtes sûre voulez-vous commencer?',
      showCancelButton: true,
      confirmButtonText: `Commencer`,
      denyButtonText: `Annuler`,
      icon: 'info',
    }).then((result:any) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        this._router.navigate(['/examcandidat/token/'+this.tk]);
       // this._router.navigate(['/start/' + this.qid]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
  isDisabled:boolean=false;
}
