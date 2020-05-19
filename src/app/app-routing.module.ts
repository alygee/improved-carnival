import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
