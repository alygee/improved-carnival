import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuestionsComponent} from './components/questions/questions.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {QuickDisplayComponent} from './components/quick-display/quick-display.component';
import {DetailsComponent} from './components/details/details.component';

const routes: Routes = [
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',               component: HomePageComponent},
  {path: 'questions',          component: QuestionsComponent},
  {path: 'question/:id',       component: DetailsComponent},
  {path: 'questions/tag/:tag', component: QuickDisplayComponent, outlet: 'aux'},
  {path: 'questions/author/:author', component: QuickDisplayComponent, outlet: 'aux'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
