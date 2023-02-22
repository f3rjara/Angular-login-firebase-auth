import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* modules */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AuhtModule } from './modules/auth/auht.module';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuhtModule,
    ComponentsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
