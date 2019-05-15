import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-card',
  templateUrl: './success-card.component.html',
  styleUrls: ['./success-card.component.css']
})
export class SuccessCardComponent implements OnInit {
  @Input() model: any;
  @Output() buttonIsPressed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.buttonIsPressed.emit(true);
  }
}
