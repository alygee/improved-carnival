import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../services/Question';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAuthorQuestions(userId) {
    this.router.navigate([{outlets: {primary: 'questions', aux: `questions/author/${userId}`}}]);
  }

  navigateToTagQuestions(tag) {
    this.router.navigate([{outlets: {primary: 'questions', aux: `questions/tag/${tag}`}}]);
  }

}
