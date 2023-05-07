import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserBlockComponent } from './components/user-block/user-block.component';
import { CarmaComponent } from './components/carma/carma.component';
import { CoinTargetComponent } from './components/coin-target/coin-target.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavTargetsComponent } from "./components/nav-targets/nav-targets.component";
import { TargetsComponent } from './components/targets/targets.component';
import { CircleProgressBarComponent } from './components/circle-progress-bar/circle-progress-bar.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from "@angular/common/http";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";



@NgModule({
  declarations: [
    AppComponent,
    UserBlockComponent,
    CarmaComponent,
    CoinTargetComponent,
    MainPageComponent,
    NavTargetsComponent,
    TargetsComponent,
    CircleProgressBarComponent,
    ProfilePageComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDIRqVBuprNV7I5KLu1CGEVdMrn0WeYx8c",
      authDomain: "koffein-app.firebaseapp.com",
      databaseURL: "https://koffein-app-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "koffein-app",
      storageBucket: "koffein-app.appspot.com",
      messagingSenderId: "558286321121",
      appId: "1:558286321121:web:70350c669e473ca201cea0"
    }),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
