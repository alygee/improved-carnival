import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
import { QuickDisplayComponent } from './components/quick-display/quick-display.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { AnswerComponent } from './components/answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuestionsComponent,
    QuestionComponent,
    QuickDisplayComponent,
    DetailsComponent,
    AnswerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
