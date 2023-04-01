import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterriderComponent } from './registerrider/registerrider.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { RiderBoardComponent } from './rider-board/rider-board.component';
import { RiderResolveService } from './rider-resolve.service';
import { RidereqeustComponent } from './ridereqeust/ridereqeust.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'admin', component:AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  {path: 'user', component:UserComponent, canActivate:[AuthGuard], data:{roles:['User']}},
  {path: 'login', component:LoginComponent},
  {path: 'forbidden', component:ForbiddenComponent},
  {path: 'rideRequest', component:RidereqeustComponent, canActivate:[AuthGuard], data:{roles:['Admin', 'User']}},
  {path: 'registerRider', component:RegisterriderComponent, canActivate:[AuthGuard], data:{roles:['Admin', 'User']},
    resolve: {
      rider: RiderResolveService
    }
  },
  {path: 'riderBoard', component:RiderBoardComponent, canActivate:[AuthGuard], data:{roles:['Admin', 'User']}},
  {path: 'registerUser', component:RegisteruserComponent},
  {path: 'uploadBoard', component:UserBoardComponent, canActivate:[AuthGuard], data:{roles:['Admin', 'User']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
