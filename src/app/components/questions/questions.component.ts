import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Question} from '../../services/Question';
import {QuestionsService} from '../../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  intitle: string;

  constructor(private router: Router, private questionsService: QuestionsService) {
    const state = this.router.getCurrentNavigation().extras.state;
    if (state) {
      this.questions = state.items;
      this.intitle = state.intitle;
    }
  }

  ngOnInit(): void {
    if (!this.questions) {
      this.fetchQuestions();
    }
  }

  private fetchQuestions() {
    this.questionsService
      .questions()
      .subscribe((response) => {
        this.questions = response['items'];
      });
  }

}
