import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CurriculumComponent} from './curriculum/curriculum.component';
import {InterviewComponent} from './interview/interview.component';
import {GateComponent} from './gate/gate.component';



const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'curriculum', component: CurriculumComponent },
	{ path: 'interview', component: InterviewComponent },
	{ path: 'gate', component: GateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
