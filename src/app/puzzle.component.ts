import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
  selector:"my-puzzle",
  template:`
  <section class="setup">
    <h1>Game Setup</h1>
    Enter your name please:
    <input type="text" #name (keyup)="0"/>
  </section>
 <section [ngStyle]="{display: name.value==='' ? 'none' :'block'}"
  [ngClass]="{puzzle:true,solved:!(switch1.value!=switch1Number || switch2.value!=switch2Number || switch3.value!=switch3Number || switch4.value!=switch4Number)}">
    <h1>The Puzzle | {{switch1.value!=switch1Number || switch2.value!=switch2Number || switch3.value!=switch3Number || switch4.value!=switch4Number ? 'NOT Solved' : 'Solved'}}</h1>
    Ok Welcome {{name.value}}
    <br>
    <br>
    Switch 1:<input type="text" #switch1 (keyup)="0" /><br>
    Switch 2:<input type="text" #switch2 (keyup)="0" /><br>
    Switch 3:<input type="text" #switch3 (keyup)="0 "/><br>
    Switch 4:<input type="text" #switch4 (keyup)="0" /><br>
 </section>
 <h2  [hidden]="switch1.value!=switch1Number || switch2.value!=switch2Number || switch3.value!=switch3Number || switch4.value!=switch4Number">Conguratulations {{name.value}},you did it!</h2>`

})

export class PuzzleComponent implements OnInit {
   switch1Number:Number;
   switch2Number:Number;
   switch3Number:Number;
   switch4Number:Number;

   ngOnInit() : any {
     this.switch1Number=Math.round(Math.random());
     this.switch2Number=Math.round(Math.random());
     this.switch3Number=Math.round(Math.random());
     this.switch4Number=Math.round(Math.random());
     console.log(this.switch1Number,this.switch2Number,this.switch3Number,this.switch4Number);
   }

}
