import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmpGridComponent } from './emp-grid/emp-grid.component';
import { DetailsModalComponent } from './details-modal/details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpGridComponent,
    DetailsModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
