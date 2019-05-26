import { EstadisticaComponent } from '../ingreso-egreso/estadistica/estadistica.component';
import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';
import { Routes } from '@angular/router';
import { DetalleComponent } from '../ingreso-egreso/detalle/detalle.component';
import { AuthGuardService } from '../auth/auth-guard.service';



export const dashboardRoutes: Routes = [

  { path: '', component: EstadisticaComponent },
  { path: 'ingreso-egreso', component: IngresoEgresoComponent },
  { path: 'detalle', component: DetalleComponent },
 
 ];
 