import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Question} from '../../services/Question';
import {QuestionsService} from '../../services/questions.service';
import mock from '../../services/mock';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  hasQuickDisplay = false;
  questions: Question[];
  quickDisplayItems: Question[];
  intitle: string;
  quickDisplayTitle: string;

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
    this.questions = mock.items;
    // this.questionsService
    //   .questions()
    //   .subscribe((response) => {
    //     this.questions = response['items'];
    //   });
  }

  onOpen(payload) {
    this.quickDisplayItems = payload.items;
    this.quickDisplayTitle = payload.title;
    this.hasQuickDisplay = true;
  }

}
