import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CribLisitngComponent } from './crib-lisitng/crib-lisitng.component';
import { CribCardComponent } from './crib-card/crib-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CribLisitngComponent,
    CribCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
