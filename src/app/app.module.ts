import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

//import {AuthHttp, AuthConfig, tokenNotExpired, JwtHelper} from 'angular-jwt';

//Componentes de la app
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
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { PaginationComponent } from './pagination/pagination.component'

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
    ExpedientesComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

