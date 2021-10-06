import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/login/login.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component'
import { PostComponent } from '../app/post/post.component'
import { PostDetailsComponent } from './post-details/post-details.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', component: DashboardComponent,
    children: [
      { path: "post", component: PostComponent },
       {path: 'post/:id', component: PostDetailsComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
