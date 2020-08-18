import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { InterviewComponent } from './interview/interview.component';
import { GateComponent } from './gate/gate.component';
import { BlogComponent } from './blog/blog.component';
import { VisualisationsComponent } from './visualisations/visualisations.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { LoginComponent } from './login/login.component';
import { ReadBlogComponent } from './read-blog/read-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurriculumComponent,
    InterviewComponent,
    GateComponent,
    BlogComponent,
    VisualisationsComponent,
    AddBlogComponent,
    LoginComponent,
    ReadBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
