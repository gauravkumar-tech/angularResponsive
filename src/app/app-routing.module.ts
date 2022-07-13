import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './404pageNotFound/pagenotfound/pagenotfound.component';
import { WatchmanGuard } from './guard/watchman.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./auth/auth.module').then(e=>e.AuthModule)
  },
  {
    path:'dashboard',
    canActivate: [WatchmanGuard],
    loadChildren: ()=> import('./user/user.module').then(e=>e.UserModule)
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
