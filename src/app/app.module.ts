import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter";
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';


//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomworkFormComponent } from './homwork-form/homwork-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomworkFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule,
    MatSelectModule, MatDatepickerModule, MatIconModule,
    MatNativeDateModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
