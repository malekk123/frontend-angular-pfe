import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
//import { category } from 'src/app/models/category';
//import { observable } from 'rxjs';
@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  categories = [];
  
  constructor(private _category: CategoryService) {}

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data: any) => {
        //css
        this.categories = data;
        console.log(this.categories);
      },

      (error) => {
        //
        console.log(error);
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    );
  }
  deletecategorie(cid:any){
    Swal.fire({
      icon: 'warning',
      title: 'Vous êtes sure ?',
      confirmButtonText: 'Supprimer',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //delete...

        this._category.deleteCategory(cid).subscribe(
          (data:any) => {
            this.categories = this.categories.filter((category) => category['cid'] != cid);
            Swal.fire('Succès', 'Category supprimé ', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Erreur dans suppression de la category', 'error');
          }
        );
      }
    });
  


  }
  


}
