import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientHomeComponent } from './clientpages/client-home/client-home.component';
import { ConsultantFormComponent } from './interalpages/consultant-form/consultant-form.component';
import { FormsModule } from '@angular/forms';
import { UsamapComponent } from './components/usamap/usamap.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientHomeComponent,
    ConsultantFormComponent,
    UsamapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
