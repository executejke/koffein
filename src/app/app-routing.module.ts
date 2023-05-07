import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {NavTargetsComponent} from "./components/nav-targets/nav-targets.component";
import {TargetsComponent} from "./components/targets/targets.component";






const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
      {path: 'main/targets', component: NavTargetsComponent, children: [
          {path: 'active', component: TargetsComponent}
        ]}
    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
