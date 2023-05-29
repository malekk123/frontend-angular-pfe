import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _cat: CategoryService,
    private _router: Router
  ) { }

  cid = 0;
  category:any;
  
  ngOnInit(): void {
    this.cid = this._route.snapshot.params['cid'];
    // alert(this.qId);
    this._cat.getCategory(this.cid).subscribe(
      (data: any) => {
        this.category = data;
        console.log(this.category);
      },
      (error) => {
        console.log(error);
      }
    );
  }

   //update form submit
   public updateData() {
    //validatate

    this._cat.updateCategory(this.category).subscribe(
      (data) => {
        Swal.fire('Success !!', 'category mis à jour', 'success').then((e) => {
          this._router.navigate(['/admin/categories']);
        });
      },
      (error) => {
        Swal.fire('Error', 'error in updating quiz', 'error');
        console.log(error);
      }
    );
  }
}
