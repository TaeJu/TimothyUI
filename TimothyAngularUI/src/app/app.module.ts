import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RidereqeustComponent } from './ridereqeust/ridereqeust.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterriderComponent } from './registerrider/registerrider.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { MatTableModule } from '@angular/material/table';
import { RiderBoardComponent } from './rider-board/rider-board.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DragDirective } from './drag.directive';
import {MatIconModule} from '@angular/material/icon';
import { ShowRiderImageDialogComponent } from './show-rider-image-dialog/show-rider-image-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserBoardComponent } from './user-board/user-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    RidereqeustComponent,
    RegisterriderComponent,
    RegisteruserComponent,
    RiderBoardComponent,
    DragDirective,
    ShowRiderImageDialogComponent,
    UserBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
