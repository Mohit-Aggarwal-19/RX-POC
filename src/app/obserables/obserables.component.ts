import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { operators } from '../../assets/operators.enum';

@Component({
  selector: 'app-obserables',
  templateUrl: './obserables.component.html',
  styleUrl: './obserables.component.css',
})
export class ObserablesComponent {
  rxjsOperator!: Array<string>;

  operatorName!: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.rxjsOperator = rxjsOperators;
  }

  onClick(operator: string) {
    this.operatorName = operator;
    switch (operator) {
      case operators.OF:
        this.router.navigate(['of'], { relativeTo: this.route });
        break;
      case operators.FROM:
        this.router.navigate(['from'], { relativeTo: this.route });
        break;
      case operators.FROMEVENT:
        this.router.navigate(['from-event'], { relativeTo: this.route });
        break;
      case operators.INTERVAL:
        this.router.navigate(['interval-and-timer'], { relativeTo: this.route });
        break;
      case operators.TIMER:
        this.router.navigate(['interval-and-timer'], { relativeTo: this.route });
        break;
    }
  }
}

const rxjsOperators = [
  "map",
  "filter",
  "tap",
  "switchMap",
  "mergeMap",
  "concatMap",
  "exhaustMap",
  "catchError",
  "retry",
  "take",
  "takeUntil",
  "debounceTime",
  "throttleTime",
  "distinctUntilChanged",
  "shareReplay",
  "combineLatest",
  "withLatestFrom",
  "startWith",
  "scan",
  "reduce",
  "merge",
  "concat",
  "zip",
  "forkJoin",
  "from",
  "of",
  "fromEvent",
  "interval",
  "timer",
  "delay",
  "buffer",
  "bufferTime",
  "bufferCount",
  "pluck",
  "pairwise",
  "groupBy"
];