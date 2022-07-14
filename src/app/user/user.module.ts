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
import { FlexLayoutModule } from '@angular/flex-layout';
import { RepairsComponent } from './dashboard/repairs/repairs.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { OnlyNumbersDirective } from './dashboard/only-numbers.directive';
import { StepperOneComponent } from './dashboard/repairs/stepper-one/stepper-one.component';
import { StepperTwoComponent } from './dashboard/repairs/stepper-two/stepper-two.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    DashboardComponent,
    MaindashbardComponent,
    SidebarComponent,
    RepairsComponent,
    OnlyNumbersDirective,
    StepperOneComponent,
    StepperTwoComponent,
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
    MatDividerModule,
    FlexLayoutModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule
  ],
  exports:[
    DashboardComponent,
  ]
})
export class UserModule { }
