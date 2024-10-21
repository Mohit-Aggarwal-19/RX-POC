import { Component } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval-and-timer',
  templateUrl: './interval-and-timer.component.html',
  styleUrl: './interval-and-timer.component.css'
})
export class IntervalAndTimerComponent {

  subscription: Array<Subscription> = [new Subscription(),new Subscription()]
  intervalMessage!:string;
  timerMessage!:string;



  ngOnInit(){
    this.subscription[0] = interval(1000).subscribe((res)=>{
      this.intervalMessage = "Rule " + res;
      if(res>5){
        this.subscription[0].unsubscribe()
      }
    })

    this.subscription[1] = timer(2000,1000).subscribe((res)=>{
      this.timerMessage = "Rule " + res;
      if(res>=5){
        this.subscription[1].unsubscribe();
      } 
    })
  }

}
