import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {

  @Input() name: any
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>()

  showList: boolean = false
  id: any = 0
  value: any = "Categoria"

  constructor() { }

  ngOnInit(): void {
  }

  setValues(id: any, value: any) {
    this.value = value
    this.id = id
    this.showList = false
    this.dataChange.emit(this.id)
  }

}
