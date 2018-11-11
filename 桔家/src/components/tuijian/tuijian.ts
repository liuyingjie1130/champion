import { Component } from '@angular/core';

/**
 * Generated class for the TuijianComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tuijian',
  templateUrl: 'tuijian.html'
})
export class TuijianComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
