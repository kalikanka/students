import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './Components/about/about.component';
import {StudentsComponent} from './Components/students/students.component';
import {LoginComponent} from './Components/login/login.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent },
  {path: 'home', component: StudentsComponent },
  {path: 'login', component: LoginComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule {
}
