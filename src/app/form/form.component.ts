import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    one:string="frist name";
  two:string="last name";
 event:any="";
 fristname="aya";
 lastname="nosair";
 textdata="";
 save="the data is saved";
 //void
changedata(){
this.one="your frist name";
this.two="your last name";
}
//return
getdata(){
return this.one,this.two


}


//event

onclick(event:any){

console.log(this.event=this.save);
}




}
