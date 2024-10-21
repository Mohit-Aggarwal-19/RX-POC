import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObserablesComponent } from './obserables/obserables.component';
import { OfOperatorComponent } from './parent/of-operator/of-operator.component';
import { FromComponent } from './parent/from/from.component';
import { FromEventComponent } from './parent/from-event/from-event.component';
import { IntervalAndTimerComponent } from './parent/interval-and-timer/interval-and-timer.component';
import { ConcatComponent } from './parent/concat/concat.component';
import { MergeComponent } from './parent/merge/merge.component';

const routes: Routes = [
  {
    path: 'observable',
    children:[{
      path: '',
      component: ObserablesComponent,
    },
    {
      path: 'of',
      component: OfOperatorComponent,
    },
    {
      path: 'from',
      component: FromComponent,
    },
    {
      path: 'from-event',
      component: FromEventComponent,
    },
    {
      path: 'interval-and-timer',
      component: IntervalAndTimerComponent,
    },
    {
      path: 'concat',
      component: ConcatComponent,
    },
    {
      path: 'merge',
      component: MergeComponent,
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
