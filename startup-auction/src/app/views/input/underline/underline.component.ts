import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-underline',
  templateUrl: './underline.component.html',
  styleUrls: ['./underline.component.css']
})
export class UnderlineComponent implements OnInit {

  @Input() data: any
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>()
  @Input() name: any
  @Input() type: any

  constructor() { }

  ngOnInit(): void {
  }

  update(data: any) {
    this.dataChange.emit(data)
  }
}
