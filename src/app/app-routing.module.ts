import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CurriculumComponent} from './curriculum/curriculum.component';
import {InterviewComponent} from './interview/interview.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'curriculum', component: CurriculumComponent },
	{ path: 'interview', component: InterviewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
