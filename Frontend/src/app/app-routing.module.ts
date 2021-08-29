
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './Components/details/details.component';
import { ListComponent } from './Components/list/list.component';
import { CreateComponent } from "./Components/create/create.component";

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: ListComponent },
  { path: 'tutorials/:id', component: DetailsComponent },
  {path:'add',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
