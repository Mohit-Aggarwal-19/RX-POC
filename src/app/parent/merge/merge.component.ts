import { Component } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.css'
})
export class MergeComponent {

  constructor(){}

  ngOnInit(){
    const sourceIndiaRule = interval(1000).pipe(
      map((v) => 'India Rule ' + (v + 1)),
      take(5)
    );

    const sourceChinaRule = interval(2000).pipe(
      map((v) => 'China Rule ' + (v + 1)),
      take(3)
    );

    const sourceAfricaRule = interval(3000).pipe(
      map((v) => 'Africa Rule ' + (v + 1)),
      take(7)
    );

    const sourceObservable = merge(sourceIndiaRule,sourceChinaRule,sourceAfricaRule);
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
