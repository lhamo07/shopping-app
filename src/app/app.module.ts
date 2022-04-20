import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalReferenceDemoComponent } from './local-reference-demo/local-reference-demo.component';
import { NewComponentComponent } from './new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalReferenceDemoComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
