import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBoxComponent } from './components/form-box/form-box.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
    FormBoxComponent,
    InputComponent,
    ButtonComponent,
    InfoComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormBoxComponent,
    InputComponent,
    ButtonComponent,
    InfoComponent,
    NavComponent
  ]
})
export class SharedModule { }
