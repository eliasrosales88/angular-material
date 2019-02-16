import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RegisterComponent } from './views/register/register.component';
import { InfoComponent } from './views/info/info.component';
import { UserListComponent } from './views/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'info', component: InfoComponent}
  { path: 'users', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
