import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridDataTableComponent } from './shared/components/grid-data-table/grid-data-table.component';
import { AgGridModule } from 'ag-grid-angular'; // Import AgGridModule
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GridDataTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
