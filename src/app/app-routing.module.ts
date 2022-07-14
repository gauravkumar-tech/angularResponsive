import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './404pageNotFound/pagenotfound/pagenotfound.component';
import { WatchmanGuard } from './guard/watchman.guard';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { PostComponent } from './user/post/post.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./auth/auth.module').then(e=>e.AuthModule)
  },
  {
    path:'user',
    canActivate: [WatchmanGuard],
    // loadChildren: ()=> import('./user/user.module').then(e=>e.UserModule)
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'post',
        component:PostComponent,
        outlet:'userm'
      }
    ]
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
