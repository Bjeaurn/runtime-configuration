import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfigModule } from './config/config.module';

@NgModule({
  declarations: [AppComponent],
  imports: [ConfigModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
