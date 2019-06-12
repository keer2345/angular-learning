import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvestmentsComponent } from './components/investments/investments.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';
import { AccountService } from './services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { TickerComponent } from './components/ticker/ticker.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    AlertComponent,
    TickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AlertService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
