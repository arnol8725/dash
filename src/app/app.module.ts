import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './auth/login/login.component';
//import { RegisterComponent } from './auth/register/register.component';

/*import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component';
import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component';
import { DetalleComponent } from './ingreso-egreso/detalle/detalle.component';  */

/*import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';*/
//import {FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

//ngrx
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { OrdernIngresoEgresoPipe } from './ingreso-egreso/ordern-ingreso-egreso.pipe';

//Chart graficas
import { ChartsModule } from 'ng2-charts';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { IngresoEgresoModule } from './ingreso-egreso/ingreso-egreso.module';


@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    //RegisterComponent,
    /*DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,*/
    /*FooterComponent,
    NavbarComponent,
    SidebarComponent,*/
    //OrdernIngresoEgresoPipe
  ],
  imports: [
    BrowserModule,
    AuthModule,
    //SharedModule,
      // IngresoEgresoModul, No se debe de agregar los componentes si es con carga peresosa
    //FormsModule,
    //ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebase, 'ingreso-egreso-app'),
    AngularFirestoreModule,
    //AngularFireAuthModule,
    AppRoutingModule,
    //ChartsModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
