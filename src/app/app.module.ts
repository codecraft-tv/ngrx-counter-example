import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {CounterComponent} from './app.component';
import {counterReducer} from './app.reducers';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    StoreModule.provideStore({counter: counterReducer}),

    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [CounterComponent]
})
export class AppModule {
}
