import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {HikesComponent} from "./components/hikes/hikes.component";

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'hikes', component: HikesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
