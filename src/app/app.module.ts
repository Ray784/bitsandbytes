import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { InterviewComponent } from './interview/interview.component';
import { GateComponent } from './gate/gate.component';
import { BlogComponent } from './blog/blog.component';
import { VisualisationsComponent } from './visualisations/visualisations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurriculumComponent,
    InterviewComponent,
    GateComponent,
    BlogComponent,
    VisualisationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
