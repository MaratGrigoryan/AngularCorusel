import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { ModaleComponent } from './modale/modale.component';

@NgModule({
  declarations: [
    AppComponent,
    ModaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],

  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
