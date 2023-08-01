import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-box',
  templateUrl: './form-box.component.html',
  styleUrls: ['./form-box.component.scss']
})
export class FormBoxComponent {
  
  @Input() title:any = 'Texto por defecto';
}
