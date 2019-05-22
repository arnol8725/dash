import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

// import { AuthGuardService } from '../auth/auth-guard.service';
import { dashboarRoutes } from './dashboard.routes';


const routes: Routes = [
  {
        path: '',
        component: DashboardComponent,
        children: dashboarRoutes,
        // canActivate: [ AuthGuardService ]
    }
];


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class DashboardRoutingModule { }
