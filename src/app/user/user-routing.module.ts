import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaindashbardComponent } from './dashboard/maindashbard/maindashbard.component';
import { PcComponent } from './dashboard/pc/pc.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {path:'',component:MaindashbardComponent},
      {path:'pc',component:PcComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
