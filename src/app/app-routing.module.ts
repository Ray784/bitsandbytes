import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CurriculumComponent} from './curriculum/curriculum.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'curriculum', component: CurriculumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
