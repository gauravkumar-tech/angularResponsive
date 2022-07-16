import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllrepairsComponent } from './dashboard/allrepairs/allrepairs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeveloperswebsiteComponent } from './dashboard/developerswebsite/developerswebsite.component';
import { MaindashbardComponent } from './dashboard/maindashbard/maindashbard.component';
import { RepairsComponent } from './dashboard/repairs/repairs.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {path:'',component:MaindashbardComponent},
      {path:'repairs',component:RepairsComponent},
      {path:'allrepairs',component:AllrepairsComponent},
      {path:'gaurav',component:DeveloperswebsiteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
