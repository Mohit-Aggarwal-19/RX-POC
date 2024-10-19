import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrl: './of-operator.component.css'
})
export class OfOperatorComponent {

  observable=of(1,2,3,5,6);

  displayOfOperatorEmitValue:Array<any>=[]

  ngOnInit(){
    this.observable.subscribe({
      next:(value)=>{
        console.log("result",value)
        this.displayOfOperatorEmitValue.push(value)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
