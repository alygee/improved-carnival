import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../services/Question';

@Component({
  selector: 'app-quick-display',
  templateUrl: './quick-display.component.html',
  styleUrls: ['./quick-display.component.scss']
})
export class QuickDisplayComponent implements OnInit {
  @Input() questions: Question[];

  constructor() { }

  ngOnInit(): void {
  }

}
