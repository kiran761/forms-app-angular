import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  email:string = "";
  password:string = "";


  print(){
    console.log(this.email + this.password);
  }



}
