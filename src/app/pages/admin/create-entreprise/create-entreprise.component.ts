import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import Swal from 'sweetalert2';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-create-entreprise',
  templateUrl: './create-entreprise.component.html',
  styleUrls: ['./create-entreprise.component.css']
})
export class CreateEntrepriseComponent implements OnInit {

  constructor(
    private entre:EntrepriseService,
    private router:Router) { }

  public entreprise={
    noment:'',
    email:'',
    numtele:'',
    fax:'',
    siteweb:'',

  }

  ngOnInit(): void {
  }
  formSubmit(){
    this.entre.addEntreprise(this.entreprise).subscribe(
      (data: any) => {
        //success
        console.log(data);
        //alert('success');
        Swal.fire('Successfully done !!', 'entreprise id is ' + data.entrpriseid, 'success').then((result)=>{
          this.router.navigate(['/admin/list-entreprise']);
        }
        );
        
      },
      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
       
      }
    );
  }

  }

