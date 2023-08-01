import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type='text'
  @Input() label='Label default'
  @Input() placeHolder= false
  @Input() error = false;

  @Input() data:any
  @Output() dataChange = new EventEmitter<any>();
  
  onInputChange() {
    this.dataChange.emit(this.data);
  }
}
