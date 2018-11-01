import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'lib/state/employee.reducer';
import { FiveComponent } from './test/five/five.component';
import { TwoComponent } from './test/two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    FiveComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
