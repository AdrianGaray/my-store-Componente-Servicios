import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store-Componente-Servicios';
  imgParent ='my-store';
  imgParentUrl = 'https://www.w3schools.com/howto/img_avatar.png'

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
