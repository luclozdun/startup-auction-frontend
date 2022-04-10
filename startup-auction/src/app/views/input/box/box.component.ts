import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnInit, OnChanges {

  show: boolean = false
  @Output() changeData: EventEmitter<any> = new EventEmitter<any>()
  @Input() text: String = "Hola"
  @Input() data: any
  url: any
  image: boolean = false
  showImage: any

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      if (this.data !== undefined) {
        console.log(this.data)
        this.isUpdate()
      }

    }

  }

  ngOnInit(): void {}

  isUpdate() {
    this.image = true
    this.showImage = "https://firebasestorage.googleapis.com/v0/b/shopmediastorage.appspot.com/o/" + this.data
  }

  close() {
    this.show = false
  }

  getUrl(data: any) {
    this.show = false
    this.url = data
    this.image = true
    this.showImage = "https://firebasestorage.googleapis.com/v0/b/shopmediastorage.appspot.com/o/" + data
    this.changeData.emit(data)
  }
}
