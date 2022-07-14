import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { MaindashbardComponent } from './dashboard/maindashbard/maindashbard.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { AreachartComponent } from '../shared/areachart/areachart.component';
import { SharedModule } from '../shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    DashboardComponent,
    MaindashbardComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    RouterModule,
    MatListModule,
    SharedModule,
    MatDividerModule
  ],
  exports:[
    DashboardComponent,
  ]
})
export class UserModule { }
