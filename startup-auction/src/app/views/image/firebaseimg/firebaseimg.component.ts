import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-firebaseimg',
  templateUrl: './firebaseimg.component.html',
  styleUrls: ['./firebaseimg.component.css']
})
export class FirebaseimgComponent implements OnInit {

  @Output() closeForm: EventEmitter<any> = new EventEmitter<any>()
  @Output() sendForm: EventEmitter<any> = new EventEmitter<any>()
  inputImage: any

  value: any = -1
  images: Array<string>
  load: boolean = false
  inactive: boolean = false
  url: any

  isNewImage: boolean = false
  path: any

  constructor(private storage: AngularFireStorage, private changeDetect: ChangeDetectorRef) {
    this.images = new Array<string>()
  }

  ngOnInit(): void {
    this.getImage()
  }

  getImage() {
    var list = [] as any

    try {
      this.storage.ref("").listAll().subscribe(async (data: any) => {
        for (const item of data.items) {
          await this.storage.ref(item.name).getDownloadURL().toPromise().then((url: any) => {
            list.push(url)
          })
        }
        this.images = list
        setTimeout(() => {
          this.load = true
          this.changeDetect.detectChanges()
        }, 30)
      })
    } catch (e: any) {
      console.log(e)
    }
  }

  selectImg(index: any) {
    this.inactive = true
    this.value = index
    this.changeDetect.detectChanges()
  }

  send() {
    if (!this.isNewImage) {
      if (this.value == -1) {
        console.log("Select")
        return
      }
      this.url = this.images[this.value].slice(75)
      this.sendUrl(this.url)
    } else {
      var urlDownload: string

      var a = "/files" + Math.random() + this.path
      var upload = this.storage.storage.ref().child(a).put(this.path)

      upload.then(async (snapshot: any) => {
        await snapshot.ref.getDownloadURL().then((url: string) => {
          //https://firebasestorage.googleapis.com/v0/b/shopmediastorage.appspot.com/o/
          urlDownload = url.slice(75)
        })
      }).then(() => {
        this.sendUrl(urlDownload)
      })
    }
  }

  addImage(data: any) {
    this.load = false

    setTimeout(() => {
      this.path = data.target.files[0]
      const g = document.getElementById("imagefirebaseAdd")
      //@ts-ignore
      g.src = URL.createObjectURL(data.target.files[0])
      this.inactive = true
      this.isNewImage = true
    }, 200)
  }

  close() {
    this.closeForm.emit()
  }

  sendUrl(url: any) {
    this.sendForm.emit(url)
  }
}
