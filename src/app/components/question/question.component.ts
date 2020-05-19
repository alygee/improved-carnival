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

  showUserHistory(userId) {
    this.questionsService
      .userHistory(userId)
      .subscribe((response) => {
        this.open.emit({
          items: response['items'],
          title: 'User history'
        });
      });
  }

  showTagQuestions(tag) {
    this.router.navigate([`/questions/tag/${tag}`]);
    // this.questionsService
    //   .tagQuestions(tag)
    //   .subscribe((response) => {
    //     this.open.emit({
    //       items: response['items'],
    //       title: 'Questions on the tag'
    //     });
    //   });
  }

}
