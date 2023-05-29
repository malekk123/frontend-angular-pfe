import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ListUserComponent } from './pages/admin/list-user/list-user.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//import { version as ckeditor5PackageVersion } from '@ckeditor/ckeditor5/package.json';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import { CreateUserComponent } from './pages/admin/create-user/create-user.component';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { DetailsComponent } from './pages/admin/details/details.component';
import { UpdateCategorieComponent } from './pages/admin/update-categorie/update-categorie.component';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { CampagneComponent } from './pages/user/campagne/campagne.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AddCampagneComponent } from './pages/user/add-campagne/add-campagne.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateCampagneComponent } from './pages/user/update-campagne/update-campagne.component';
import { ExamComponent } from './pages/user/exam/exam.component';
import { ProfilEntrepriseComponent } from './pages/user/profil-entreprise/profil-entreprise.component';
import { ListEntrepriseComponent } from './pages/admin/list-entreprise/list-entreprise.component';
import { CreateEntrepriseComponent } from './pages/admin/create-entreprise/create-entreprise.component';
import { UpdateEntrepriseComponent } from './pages/admin/update-entreprise/update-entreprise.component';
import { QuestionnaireComponent } from './pages/user/questionnaire/questionnaire.component';
import { NgxUiLoaderModule,NgxUiLoaderRouterModule,SPINNER} from "ngx-ui-loader";
import {MatExpansionModule} from '@angular/material/expansion';
import { AjouterQuestionComponent } from './pages/user/ajouter-question/ajouter-question.component';
import { UpdateQuestionComponent } from './pages/update-question/update-question.component';
import { AddExamenComponent } from './pages/user/add-examen/add-examen.component';
import {MatStepperModule} from '@angular/material/stepper';
//import { SearchPipe } from './pages/user/add-examen/search.pipe';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { AddReponseComponent } from './pages/admin/add-reponse/add-reponse.component';
import { InvitationComponent } from './pages/user/invitation/invitation.component';
import { CandidatComponent } from './pages/candidat/candidat/candidat.component';
import { InstructionComponent } from './pages/instruction/instruction.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoadExamComponent } from './pages/candidat/load-exam/load-exam.component';
import { CommentaireComponent } from './pages/candidat/commentaire/commentaire.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AjouterreponseComponent } from './pages/user/ajouterreponse/ajouterreponse.component';
import { ShowreponseComponent } from './pages/user/showreponse/showreponse.component';
import { ConfigmailComponent } from './pages/user/configmail/configmail.component';
import { BorderCardDirective } from './pages/user/border-card.directive';
import { AccueilComponent } from './pages/user/accueil/accueil.component';
import {MatRadioModule} from '@angular/material/radio';
import { NouvelleentComponent } from './pages/nouvelleent/nouvelleent.component';
import { VoirquestComponent } from './pages/user/voirquest/voirquest.component';
import { ClassementComponent } from './pages/user/classement/classement.component';
import {MatChipsModule} from '@angular/material/chips';
import { MotdepasseoubComponent } from './pages/motdepasseoub/motdepasseoub.component';
import { ForgetmotdepasseComponent } from './pages/forgetmotdepasse/forgetmotdepasse.component';
import { ConfirmTokenComponent } from './pages/confirm-token/confirm-token.component';
import { ToastrModule } from 'ngx-toastr';
import { EspaceCandidatComponent } from './pages/espace-candidat/espace-candidat.component';
import { CommentaireCComponent } from './pages/commentaire-c/commentaire-c.component';
import { EmailConfirmComponent } from './pages/email-confirm/email-confirm.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { environment } from 'src/environments/environment';
import { RECAPTCHA_SETTINGS,RecaptchaSettings,RecaptchaFormsModule,RecaptchaModule } from 'ng-recaptcha';
import { ShowinvitComponent } from './pages/user/showinvit/showinvit.component';
import { RapportComponent } from './pages/user/rapport/rapport.component';
import { RapportdetaillComponent } from './pages/user/rapportdetaill/rapportdetaill.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    AppComponent,
 //   SearchPipe,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ListUserComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    CreateUserComponent,
    UpdateUserComponent,
    DetailsComponent,
    UpdateCategorieComponent,
    UserSidebar,
    LoadQuizComponent,
    CampagneComponent,
    AddCampagneComponent,
    UpdateCampagneComponent,
    ExamComponent,
    ProfilEntrepriseComponent,
    ListEntrepriseComponent,
    CreateEntrepriseComponent,
    UpdateEntrepriseComponent,
    QuestionnaireComponent,
    AjouterQuestionComponent,
    UpdateQuestionComponent,
    AddExamenComponent,
    AddReponseComponent,
    InvitationComponent,
    CandidatComponent,
    InstructionComponent,
    LoadExamComponent,
    CommentaireComponent,
    AjouterreponseComponent,
    ShowreponseComponent,
    ConfigmailComponent,
    BorderCardDirective,
    AccueilComponent,
    NouvelleentComponent,
    VoirquestComponent,
    ClassementComponent,
    MotdepasseoubComponent,
    ForgetmotdepasseComponent,
    ConfirmTokenComponent,
    EspaceCandidatComponent,
    CommentaireCComponent,
    EmailConfirmComponent,
    ShowinvitComponent,
    RapportComponent,
    RapportdetaillComponent,

 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    MatFormFieldModule,  
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTabsModule,
    MatStepperModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CKEditorModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatRadioModule,
    NgxUiLoaderModule,
    MatExpansionModule,
    NgxCaptchaModule,
    RecaptchaModule,
    RecaptchaFormsModule,ScrollingModule,

   ToastrModule.forRoot(
    {
      progressBar:false
     
    }
   ),
    NgxUiLoaderRouterModule.forRoot(
      {
        showForeground:true,
      }
    ), // import NgxUiLoaderRouterModule. By default, it will show foreground loader.

  ],
 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [authInterceptorProviders,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {
        displayDefaultIndicatorType: false},
    },
    {
      provide:RECAPTCHA_SETTINGS,
      useValue:{
      siteKey:environment.recaptcha.siteKey,
    }as RecaptchaSettings,
  },
  ],
  bootstrap: [AppComponent],
  //entryComponents:[DetailsComponent]
 
  
})
export class AppModule { }
