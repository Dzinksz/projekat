import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { TakmicenjaComponent } from './takmicenja/takmicenja.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
{path:'', component: HomepageComponent},
{path:'home-page', component: HomepageComponent},
{path: 'takmicenja', component: TakmicenjaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
