
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from './content/content.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {CreateUserComponent} from './create-user/create-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'new', component: CreateUserComponent},
  {path: 'users', component: ContentComponent},
  {path: 'user/:id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
