import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {NavTargetsComponent} from "./components/nav-targets/nav-targets.component";
import {TargetsArchiveComponent} from "./components/targets-archive/targets-archive.component";
import {TargetsActiveComponent} from "./components/targets-active/targets-active.component";
import {TargetsNewComponent} from "./components/targets-new/targets-new.component";
import {ProfileComponent} from "./components/profile/profile.component";







const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
      {path: '', redirectTo: 'main', pathMatch: "full"},
      {path: 'main', component: NavTargetsComponent, children: [
          {path: '', redirectTo: 'active', pathMatch: "full"},
          {path: 'active', component: TargetsActiveComponent},
          {path: 'archive', component: TargetsArchiveComponent},
          {path: 'new', component: TargetsNewComponent}
        ]},
      {path: 'profile', component: ProfileComponent}
    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
