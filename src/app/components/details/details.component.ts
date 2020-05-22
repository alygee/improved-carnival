import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../../services/questions.service';
import {Answer} from '../../services/Answer';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  answers: Answer[];

  constructor(private route: ActivatedRoute, private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.questionsService
        .answers(params.get('id'))
        .subscribe((response) => {
          this.answers = response['items'];
        });
    });
  }

}
