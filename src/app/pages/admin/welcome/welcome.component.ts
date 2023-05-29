import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { QuizService } from 'src/app/services/quiz.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  total:any;
  users:any;
  categories:any;
  quizzes :any;
  entreprises:any;
  constructor(private ent:EntrepriseService,
    private cat:CategoryService, 
    private quiz:QuizService) { }

  ngOnInit(): void {
    this.ent.getAllentreprise().subscribe(
      (data:any)=>{
        this.entreprises =data;
      },
      (error)=>{
        console.log(error);
      }
    )
           
         

     this.cat.categories().subscribe(
      (data:any) =>{
        this.categories= data;
        console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur','Erreur dans le téléchargement des données ','error');
      }
      );

      this.quiz.quizzes().subscribe(
        (data:any)=>{
          this.quizzes = data;
          console.log(this.quizzes);
        },
        (error)=>{
          console.log(error);
          Swal.fire('Erreur','Erreur dans le téléchargement des données ','error');
        }
      )
     
  }

}
