import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionsService} from '../../services/questions.service';
import mock from '../../services/mock';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  intitle = '';

  constructor(private router: Router, private questionsService: QuestionsService) {}

  navigateToQuestions() {
    // this.questionsService
    //   .search(this.intitle)
    //   .subscribe((response) => {
        this.router.navigate(['questions'], {
          state: {
            items: mock.items,
            intitle: this.intitle
          }
        });
    //   });
  }

}
