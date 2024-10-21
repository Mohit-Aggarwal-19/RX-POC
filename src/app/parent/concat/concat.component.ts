import { Component } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.css'
})
export class ConcatComponent {
  constructor(){}

  ngOnInit(){
    const sourceIndiaRule = interval(1000).pipe(
      map((v) => 'India Rule ' + (v + 1)),
      take(5)
    );

    const sourceChinaRule = interval(1000).pipe(
      map((v) => 'China Rule ' + (v + 1)),
      take(3)
    );

    const sourceAfricaRule = interval(1000).pipe(
      map((v) => 'Africa Rule ' + (v + 1)),
      take(7)
    );

    const sourceObservable = concat(sourceIndiaRule,sourceChinaRule,sourceAfricaRule);
    sourceObservable.subscribe(v=>{
      this.addElementInDOM(v)
    })

  }

  addElementInDOM(count:string){
    let el = document.createElement('li');
    el.innerText = count;

    document.getElementById('elContainer')?.appendChild(el)
  }
}
