import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danger-card',
  templateUrl: './danger-card.component.html',
  styleUrls: ['./danger-card.component.css']
})
export class DangerCardComponent implements OnInit {
  @Input() model: any;
  @Output() buttonIsPressed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.buttonIsPressed.emit(true);
  }
}
