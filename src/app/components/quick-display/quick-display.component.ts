import {Component, OnInit} from '@angular/core';
import {Question} from '../../services/Question';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../../services/questions.service';

@Component({
  selector: 'app-quick-display',
  templateUrl: './quick-display.component.html',
  styleUrls: ['./quick-display.component.scss']
})
export class QuickDisplayComponent implements OnInit {
  questions: Question[];
  title: string;

  constructor(private route: ActivatedRoute, private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('tag')) {
        this.fetchQuestionsByTag(params.get('tag'));
      } else if (params.get('author')) {
        this.fetchQuestionsByAuthor(params.get('author'));
      }
    });
  }

  fetchQuestionsByTag(tag) {
    this.title = `Questions by tag ${tag}`;
    this.questionsService
      .tagQuestions(tag)
      .subscribe((response) => {
        this.questions = response['items'];
      });
  }

  fetchQuestionsByAuthor(author) {
    this.title = 'Questions by author';
    this.questionsService
      .userHistory(author)
      .subscribe((response) => {
        this.questions = response['items'];
      });
  }

}
