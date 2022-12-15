import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth/services/auth-guard.service";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent  ,canActivate: [AuthGuardService],
  },

];
  @NgModule({
  declarations: [
    HomeComponent
   ],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: []
})
export class FeatureModule {}

