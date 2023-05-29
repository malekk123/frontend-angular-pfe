import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.css']
})
export class UpdateEntrepriseComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private entr:EntrepriseService,
    private router:Router) { }

    entrpriseid=0;
    entreprise:any;
  ngOnInit(): void {
    this.entrpriseid = this.route.snapshot.params['entrpriseid'];
    this.entr.getSingleEntreprise(this.entrpriseid).subscribe(
      (data:any) =>{
        this.entreprise = data;
        console.log(this.entreprise);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  public update(){
    this.entr.updateEntreprise(this.entreprise).subscribe(
      (data) => {
        Swal.fire('Success !!', 'entreprise met à jour', 'success').then((e) => {
          this.router.navigate(['/admin/list-entreprise']);
        });
      },
      (error) => {
        Swal.fire('Error', 'error in updating quiz', 'error');
        console.log(error);
      }
    );
  }
    
  
}
