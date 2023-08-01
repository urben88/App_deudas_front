import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  @Input() text = 'Text default'
  @Input() type = 'info'

  classStyle(){
    switch(this.type){
      case 'info':
        return this.type
      case 'warn':
        return this.type
      case 'error':
        return this.type
      case 'correct':
        return this.type
      default:
        return 'info'
    }
  }
}
