import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListPeopleComponent } from './components/list-people/list-people.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista-convidados', component: ListPeopleComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
