import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textarea-conform',
  templateUrl: './textarea-conform.component.html',
  styleUrls: ['./textarea-conform.component.css']
})
export class TextareaConformComponent implements OnInit {

  @Input() placeholder: any = ""
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>()
  @Input() data: any

  constructor() { }

  ngOnInit(): void {
  }

  update(data: any) {
    this.dataChange.emit(data)
  }
}
