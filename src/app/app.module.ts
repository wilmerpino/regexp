import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModule } from '@angular/cdk';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {DataSource} from '@angular/cdk';
//import { Http, Headers} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdInputModule, MdCardModule} from '@angular/material';
import {MdSidenavModule, MdIconModule} from '@angular/material';
import {MdToolbarModule, MdMenuModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";
//import {AuthHttp, AuthConfig, tokenNotExpired, JwtHelper} from 'angular-jwt';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ExpedientesClientesComponent } from './expedientes-clientes/expedientes-clientes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { InstitucionesComponent } from './instituciones/instituciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SeguimientosComponent } from './seguimientos/seguimientos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExpedientesComponent } from './expedientes/expedientes.component'

const appRoutes: Routes = [
    { 
        path: 'clientes', 
        component: ClientesComponent, 
        data: { title: 'Clientes' }
    },
    { 
        path: 'expedientes-clientes',  
        component: ExpedientesClientesComponent,
        data: { title: 'Expedientes por Cliente' }
    },
     { 
        path: 'login', 
        component: LoginComponent, 
        data: { title: 'Inicio de Sesi&oacute;n' }
    },
    { 
        path: 'instituciones', 
        component: InstitucionesComponent, 
        data: { title: 'Instituciones' }
    },
    { 
        path: 'expedientes', 
        component: ExpedientesComponent, 
        data: { title: 'Expedientes' }
    },
    { 
        path: 'seguimientos', 
        component: SeguimientosComponent, 
        data: { title: 'Seguimiento de Expedientes' }
    },
    { 
        path: 'usuarios', 
        component: UsuariosComponent, 
        data: { title: 'Gest&oacute;n de Usuarios' }
    },
    { 
        path: 'reportes', 
        component: ReportesComponent, 
        data: { title: 'Reportes' }
    },
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }/*,
    { 
        path: '**', 
        component: PageNotFoundComponent 
    }*/
];

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ExpedientesClientesComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    LoginComponent,
    LoginFormComponent,
    InstitucionesComponent,
    UsuariosComponent,
    SeguimientosComponent,
    ReportesComponent,
    ExpedientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdInputModule,
    MdSidenavModule, 
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule,
    FlexLayoutModule,
    MdTabsModule,
    DataSource,
    /*Http, 
    Headers,*/
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }

export class PizzaPartyAppModule { }
