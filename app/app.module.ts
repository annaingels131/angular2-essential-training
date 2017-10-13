import { NGModule } from '@angular/core';
import { BrowserModule  } from '@agular/platform-browser';
import { AppComponent } from '.app/component';

@NGModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {};
