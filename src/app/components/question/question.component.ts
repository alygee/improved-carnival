import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../services/Question';
import {QuestionsService} from '../../services/questions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private questionsService: QuestionsService) { }

  ngOnInit(): void {
  }

  navigateToAuthorQuestions(userId) {
    this.router.navigate([{outlets: {primary: 'questions', aux: `questions/author/${userId}`}}]);
  }

  navigateToTagQuestions(tag) {
    this.router.navigate([{outlets: {primary: 'questions', aux: `questions/tag/${tag}`}}]);
  }

}
