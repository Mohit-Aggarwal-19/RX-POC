import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css',
})
export class FromEventComponent {
  @ViewChild('btn') addBtn!: ElementRef;

  ngAfterViewInit() {
    let count = 0;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      count++;
      console.log('video', count);
      this.addElementInDOM(count)
    });
  }

  addElementInDOM(count:number){
    let el = document.createElement('li');
    el.innerText = "Rule" + count;

    document.getElementById('elContainer')?.appendChild(el)
  }
}
