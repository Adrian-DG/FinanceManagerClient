import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'authenticate', 
    loadChildren: () => import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  { path: '', redirectTo: 'authenticate', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
