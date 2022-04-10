import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fill-file',
  templateUrl: './fill-file.component.html',
  styleUrls: ['./fill-file.component.css']
})
export class FillFileComponent implements OnInit {

  @Output() dataChange: EventEmitter<any> = new EventEmitter<any>()
  @Input() images: any
  value: any
  path: any

  constructor() { }

  ngOnInit(): void {
  }

  event(e: any) {
    this.dataChange.emit(e)
  }

}
