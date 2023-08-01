import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  msgInfo = ''

  registerObj={
    usuario:undefined,
    password1:undefined,
    password2:undefined,
  }



  constructor(){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes['registerObj']){
      console.log("cambia")
    }
  }

  checkData(){
    console.log(this.registerObj)
    if(this.checkPass()){
      this.msgInfo = ''
    }else{
      this.msgInfo = 'Las contraseñas deben coincidir'
    }

  }
  checkPass(){
    if(this.registerObj.password1 == this.registerObj.password2){
      return true
    }
    return false
  }
  register(){
    console.log(this.registerObj)
  }
}
