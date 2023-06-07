import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"login",component:LoginformComponent},
  {path:"register",component:RegisterformComponent},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
