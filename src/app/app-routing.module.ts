import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewsComponent } from './components/addnews/addnews.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UndocumentedComponent } from './components/undocumented/undocumented.component';

const routes: Routes = [
  {path:'' , component:AddnewsComponent},
  {path:'addNews' , component:AddnewsComponent},
  {path:'newsUser' , component:NewUserComponent},
  {path:'Undocumented' , component:UndocumentedComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
