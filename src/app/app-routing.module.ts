import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuestionsComponent} from './components/questions/questions.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {QuickDisplayComponent} from './components/quick-display/quick-display.component';

const routes: Routes = [
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'quick-display', component: QuickDisplayComponent, outlet: 'aux'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
