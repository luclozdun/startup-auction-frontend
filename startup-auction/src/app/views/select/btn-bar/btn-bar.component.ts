import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-bar',
  templateUrl: './btn-bar.component.html',
  styleUrls: ['./btn-bar.component.css']
})
export class BtnBarComponent implements OnInit {

  @Input() data: Boolean = false
  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  update() {
    this.data = !this.data
    this.dataChange.emit(this.data)
  }
}
