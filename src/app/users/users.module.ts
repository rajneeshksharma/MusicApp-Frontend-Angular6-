import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ArtistComponent } from './artist/artist.component';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { SidebarComponent } from '../shared/layout/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../shared/layout/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../shared/layout/footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../shared/services/auth.guard';
import { LaddaModule } from 'angular2-ladda';
import { DataService } from '../shared/services/data.service';
import { SongsComponent } from './in/songs/songs.component';
import {TableModule} from 'primeng/table';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PasswordModule,
    TableModule,
    CheckboxModule,
    LaddaModule.forRoot({
      style: 'expand-right',
      spinnerSize: 30,
      spinnerColor: 'white',
      spinnerLines: 12,
  })
  ],
  declarations: [
    LoginComponent,
    UserComponent,
    ArtistComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    SignupComponent,
    SongsComponent
  ],
  exports: [
    LoginComponent,
    UserComponent,
    ArtistComponent,
    SignupComponent
  ],
  providers: [ AuthService, AuthGuard, DataService ]
})
export class UsersModule { }
