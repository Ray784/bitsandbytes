import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CurriculumComponent} from './curriculum/curriculum.component';
import {InterviewComponent} from './interview/interview.component';
import {GateComponent} from './gate/gate.component';
import {BlogComponent} from './blog/blog.component';
import {VisualisationsComponent} from './visualisations/visualisations.component';
import {LoginComponent} from './login/login.component';
import {AddBlogComponent} from './add-blog/add-blog.component';
import {ReadBlogComponent} from './read-blog/read-blog.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'curriculum', component: CurriculumComponent },
	{ path: 'interview', component: InterviewComponent },
	{ path: 'gate', component: GateComponent },
	{ path: 'blog', component: BlogComponent },
	{ path: 'ds-visuals', component: VisualisationsComponent },
	{ path: 'log-kWZr1n0-in', component: LoginComponent },
	{ path: 'blog/:id', component: ReadBlogComponent },
	{ path: 'add-jFZ2pW6-blog', component: AddBlogComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
