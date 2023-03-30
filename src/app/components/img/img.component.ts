import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img: string = 'valor init';
  @Input() img2: string = '';

  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';

  imgError() {
    this.img2 = this.imageDefault;
  }

  // la imagen fue cargada
  imgLoaded() {
    console.log('log hijo');
    // envia informacion al padre
    this.loaded.emit(this.img2);
  }
}
