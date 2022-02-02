import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InviteListComponent } from './invite-list/invite-list.component';
import { InviteComponent } from './invite/invite.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: InviteListComponent },
      { path: 'invite', component: InviteComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
