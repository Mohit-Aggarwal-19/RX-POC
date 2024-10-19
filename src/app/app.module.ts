import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { ObserablesComponent } from './obserables/obserables.component';
import { OfOperatorComponent } from './parent/of-operator/of-operator.component';
import { FromComponent } from './parent/from/from.component';
import { FromEventComponent } from './parent/from-event/from-event.component';
@NgModule({
  declarations: [
    AppComponent,
    ObserablesComponent,
    OfOperatorComponent,
    FromComponent,
    FromEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
