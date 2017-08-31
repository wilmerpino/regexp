import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, CommonModule  } from '@angular/common';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';

//import {AuthHttp, AuthConfig, tokenNotExpired, JwtHelper} from 'angular-jwt';
import {AuthGuard} from './auth.guard';


// Servicios de la App
import { LoginService } from './login/login.service';
import { ClientesService } from './clientes/clientes.service';
import { ExpedientesService } from './expedientes/expedientes.service';
import { PanelesService } from './paneles/paneles.service';

//Componentes de la app
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesFormComponent } from './clientes/clientes-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LoginComponent } from './login/login.component';
import { InstitucionesComponent } from './instituciones/instituciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SeguimientosComponent } from './seguimientos/seguimientos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { PaginationComponent } from './pagination/pagination.component'
import { ModalComponent } from './modal/modal.component'
import { PanelesComponent } from './paneles/paneles.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { HomeComponent } from './home/home.component';
import { ConfirmComponent } from './confirm/confirm.component';

const appRoutes: Routes = [
    { 
        path: 'paneles', 
        component: PanelesComponent, 
        data: { title: 'Paneles' }
    },
    { 
        path: 'clientes', 
        component: ClientesComponent, 
        canActivate: [AuthGuard],
        data: { title: 'Clientes' }
    },
     { 
        path: 'login', 
        component: LoginComponent, 
        data: { title: 'Inicio de Sesi&oacute;n' }
    },
    { 
        path: 'instituciones', 
        component: InstitucionesComponent, 
        canActivate: [AuthGuard],
        data: { title: 'Instituciones' }
    },
    { 
        path: 'expedientes', 
        component: ExpedientesComponent, 
        canActivate: [AuthGuard],
        data: { title: 'Expedientes' }
    },
    { 
        path: 'seguimientos', 
        component: SeguimientosComponent, 
        canActivate: [AuthGuard],
        data: { title: 'Seguimiento de Expedientes' }
    },
    { 
        path: 'usuarios', 
        component: UsuariosComponent, 
        canActivate: [AuthGuard],
        data: { title: 'Gest&oacute;n de Usuarios' }
    },
    { 
        path: 'reportes', 
        canActivate: [AuthGuard],
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
        ClientesFormComponent,
        HeaderComponent,
        FooterComponent,
        LeftMenuComponent,
        LoginComponent,
        InstitucionesComponent,
        UsuariosComponent,
        SeguimientosComponent,
        ReportesComponent,
        ExpedientesComponent,
        PaginationComponent,
        ModalComponent,
        PanelesComponent,
        MenuLateralComponent,
        HomeComponent,
        ConfirmComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    BootstrapModalModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
      Location, 
      {
          provide: LocationStrategy, 
          useClass: PathLocationStrategy
      },
      LoginService,
      ClientesService,
      ExpedientesService,
      PanelesService,
      ConfirmComponent,
      AuthGuard
  ],
   entryComponents: [
        ClientesFormComponent,
        ConfirmComponent
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }

