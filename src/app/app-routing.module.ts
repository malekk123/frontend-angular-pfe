import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { CreateUserComponent } from './pages/admin/create-user/create-user.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ListUserComponent } from './pages/admin/list-user/list-user.component';
import { UpdateCategorieComponent } from './pages/admin/update-categorie/update-categorie.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { CampagneComponent } from './pages/user/campagne/campagne.component';
import { AddCampagneComponent } from './pages/user/add-campagne/add-campagne.component';
import { UpdateCampagneComponent } from './pages/user/update-campagne/update-campagne.component';
import { ProfilEntrepriseComponent } from './pages/user/profil-entreprise/profil-entreprise.component';
import { ListEntrepriseComponent } from './pages/admin/list-entreprise/list-entreprise.component';
import { UpdateEntrepriseComponent } from './pages/admin/update-entreprise/update-entreprise.component';
import { QuestionnaireComponent } from './pages/user/questionnaire/questionnaire.component';
import { AjouterQuestionComponent } from './pages/user/ajouter-question/ajouter-question.component';
import { UpdateQuestionComponent } from './pages/update-question/update-question.component';
import { ExamComponent } from './pages/user/exam/exam.component';
import { AddExamenComponent } from './pages/user/add-examen/add-examen.component';
import { CreateEntrepriseComponent } from './pages/admin/create-entreprise/create-entreprise.component';
import { InvitationComponent } from './pages/user/invitation/invitation.component';
import { CandidatComponent } from './pages/candidat/candidat/candidat.component';
import { CandidatGuard } from './services/candidat.guard';
import { LoadExamComponent } from './pages/candidat/load-exam/load-exam.component';
import { CommentaireComponent } from './pages/candidat/commentaire/commentaire.component';
import { InstructionComponent } from './pages/instruction/instruction.component';
import { AccueilComponent } from './pages/user/accueil/accueil.component';
import { NouvelleentComponent } from './pages/nouvelleent/nouvelleent.component';
import { VoirquestComponent } from './pages/user/voirquest/voirquest.component';
import { ClassementComponent } from './pages/user/classement/classement.component';
import { MotdepasseoubComponent } from './pages/motdepasseoub/motdepasseoub.component';
import { ConfirmTokenComponent } from './pages/confirm-token/confirm-token.component';
import { ForgetmotdepasseComponent } from './pages/forgetmotdepasse/forgetmotdepasse.component';
import { EspaceCandidatComponent } from './pages/espace-candidat/espace-candidat.component';
import { CommentaireCComponent } from './pages/commentaire-c/commentaire-c.component';
import { EmailConfirmComponent } from './pages/email-confirm/email-confirm.component';
import { ShowinvitComponent } from './pages/user/showinvit/showinvit.component';
const routes: Routes = [
{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'evaluation-technique',
  component:InstructionComponent,
},
{
  path:'examcandidat/token/:tk',
  component:EspaceCandidatComponent
},
{
  path:'commentaire',
  component:CommentaireCComponent,

},
{
   path:'confirmmailpage',
   component:EmailConfirmComponent,
},
{
   path:'signinentre',
   component:NouvelleentComponent
},
{
   path:"forgotpassword",
   component:MotdepasseoubComponent,
},
{
   path:"confirm-account",
   component:ConfirmTokenComponent,
   pathMatch:'full'
},
{
   path:"reset_password",
   component:ForgetmotdepasseComponent,
   pathMatch:"full"
},
{
  path:'signin',
  component:SignupComponent,
  pathMatch:'full'
},
{ 
  path:'login',
  component:LoginComponent,
  pathMatch:'full'

},
{
  path:'admin',
  component:DashboardComponent,
  canActivate:[AdminGuard],
  children: [
    {
         path:'',
         component:WelcomeComponent,

    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    
    {
      path:'entreprise/:entrpriseid/:noment/user',
      component:ListUserComponent,
    },
    {
        path: 'user/:id',
        component:UpdateUserComponent
    },
    {
       path:'entreprise/:entrpriseid',
       component:UpdateEntrepriseComponent,
    },
    {
      path:'list-entreprise',
      component:ListEntrepriseComponent,
    },
    {
       path:':id/user',
       component:ListUserComponent
    },
    {
      path:'entreprise/:entrpriseid/:noment/nouveau utilisateur',
      component:CreateUserComponent
    },
    {
        path:'nouvelle-entreprise',
        component:CreateEntrepriseComponent,
    },
    {
        path:'categories',
        component:ViewCategoriesComponent,
    },
    {
      path:'add-category',
      component:AddCategoryComponent,
    },
    {
      path:'update-quiz/:cid',
      component:UpdateCategorieComponent,
    },
    {
      path:'quizzes',
      component:ViewQuizzesComponent,
    },
    {
      path:'add-quiz',
      component:AddQuizComponent,
    },
    {
      path:'quizzes/:qid',
      component:UpdateQuizComponent,
    },
    {
      path:'view-questions/:qid/:title',
      component:ViewQuizQuestionsComponent,

    },
    {
      path: 'add-questions/:qid/:title',
      component: AddQuestionComponent,
    },
    {
       path:'update-question/:questid',
       component:UpdateQuestionComponent,
    },
 
  ],
},
{
  path:'user-dashboard',
  component:UserDashboardComponent,
  canActivate:[NormalGuard],
  children:[
    {
      path:'',
      component:AccueilComponent
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path:'profile-entreprise',
      component:ProfilEntrepriseComponent,
    },
    {
      path:'campagne',
      component:CampagneComponent,

    },
    {
      path:'add-campagne',
      component:AddCampagneComponent,

    },
    {
      path:'campagne/:campid',
      component:UpdateCampagneComponent
    },
    {
        path:'classement/:idExam',
        component:ClassementComponent
    },
    {
      path:'question/:quesid',
      component:VoirquestComponent
    },
    {
      path:'voir-invitation',
      component:ShowinvitComponent
    },
    {
      path:'invitation',
      component:InvitationComponent
    },
    {
        path:'campagne/details/:campid/:nomCampagne',
        component:ExamComponent,
    },
    {
      path:'campagne/add-examen/:campid/:nomCampagne',
      component:AddExamenComponent,
    },
    {
      path:'questionnaire/voirquestion/:qId/:qtitle',
      component:QuestionnaireComponent,
    }, 
    {
      path:'questionnaire/ajouterquestion/:qId/:qtitle',
      component:AjouterQuestionComponent,
    },
    {
      path: 'questionnaire/:catId',
      component: LoadQuizComponent,
    },
  
    {
      path:'update-question/:quesId',
      component:UpdateQuestionComponent,
  
    },
  ],
  
},
{
  path:'candidat',
  component:CandidatComponent,
  canActivate:[CandidatGuard],
  children:[
    {
      path:'',
      component:InstructionComponent,
    },  
    {
      path:'examcandidat',
      component:LoadExamComponent,
    },    
    {
      path:'commentaire',
      component:CommentaireComponent,
    },
    
  ],
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
