import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter";
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomworkFormComponent } from './homwork-form/homwork-form.component';
import { HomeworkComponent } from './homework/homework.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListhomeworkComponent } from './listhomework/listhomework.component';


@NgModule({
  declarations: [
    AppComponent,
    HomworkFormComponent,
    HomeworkComponent,
    HeaderComponent,
    FooterComponent,
    ListhomeworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule,
    MatSelectModule, MatDatepickerModule, MatIconModule,
    MatNativeDateModule, MatInputModule, MatCardModule, MatExpansionModule, MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
