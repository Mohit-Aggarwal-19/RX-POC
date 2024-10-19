import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObserablesComponent } from './obserables/obserables.component';
import { OfOperatorComponent } from './parent/of-operator/of-operator.component';
import { FromComponent } from './parent/from/from.component';
import { FromEventComponent } from './parent/from-event/from-event.component';

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
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
