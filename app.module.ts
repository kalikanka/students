import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {StudentsComponent} from './Components/students/students.component';
import {StudentDetailComponent} from './Components/student-detail/student-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {AddStudentComponent} from './Components/add-student/add-student.component';
import {AddGradeComponent} from './Components/add-grade/add-grade.component';
import {StudentService} from './Services/student.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './Components/about/about.component';
import { LoginComponent } from './Components/login/login.component';
import {LoginService} from './Services/login.service';
import { SearchComponent } from './Components/search/search.component';
import {LettersOnlyDirective} from "./Directives/letters-only.directive";


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    AddStudentComponent,
    AddGradeComponent,
    AboutComponent,
    LoginComponent,
    SearchComponent,
    LettersOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StudentService, LoginService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
