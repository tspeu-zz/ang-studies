import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworkComponent } from './homework/homework.component';
import { HomworkFormComponent } from './homwork-form/homwork-form.component';
import { ListhomeworkComponent } from './listhomework/listhomework.component';

const routes: Routes = [
  { path: '', component: ListhomeworkComponent },
  { path: 'crear', component: HomworkFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
