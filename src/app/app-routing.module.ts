import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndmanutprimeComponent } from './indmanutprime/indmanutprime.component';
import { IndperfprimeComponent } from './indperfprime/indperfprime.component';
import { BacklogmanutprimeComponent } from './backlogmanutprime/backlogmanutprime.component';
import { IndclienteComponent } from './indcliente/indcliente.component';

const routes: Routes = [
  { path: 'backlogmanutprime', component: BacklogmanutprimeComponent },
  { path: 'indmanutprime', component: IndmanutprimeComponent },
  { path: 'indperfprime', component: IndperfprimeComponent },
  { path: 'indcliente', component: IndclienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }