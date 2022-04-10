import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-style',
  templateUrl: './date-style.component.html',
  styleUrls: ['./date-style.component.css']
})
export class DateStyleComponent implements OnInit {

  @Input() name: any
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>()
  @Input() data: any

  date: any


  nameMonth = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"]

  constructor() { }

  ngOnInit(): void {
    if (this.data === undefined) {
      this.data = "Sin Fecha"
    }
    else {
      this.convert(this.data)
    }
  }

  update() {
    var dateFormat = new Date(this.date)

    var date = dateFormat.getUTCDate()
    var month =  dateFormat.getUTCMonth()
    var year = dateFormat.getUTCFullYear()

    var format = date + "/" + month + "/" + year

    this.data = date + " de " + this.nameMonth[month] + " del " + year
    this.dataChange.emit(format)
  }

  convert(data: any) {
    var temp = data.split("/")
    var newDate = temp[1] + '/' + temp[0] + '/' + temp[2]
    var dateFormat = new Date(newDate)
    console.log(dateFormat)

    var date = dateFormat.getUTCDate()
    var month =  dateFormat.getUTCMonth()
    var year = dateFormat.getUTCFullYear()

    var format = date + "/" + month + "/" + year
    this.data = date + " de " + this.nameMonth[month] + " del " + year
  }
}
