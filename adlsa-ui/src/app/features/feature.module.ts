import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth/services/auth-guard.service";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { RequestsCertificateOwnerComponent } from "./home/request-certificate-owner-unit/request-certificate-owner-unit.component";

const routes: Routes = [
    { path: '', component: HomeComponent  ,canActivate: [AuthGuardService],},
    { path: 'request-certificate-owner', component: RequestsCertificateOwnerComponent  ,canActivate: [AuthGuardService]},

];
  @NgModule({
  declarations: [
    HomeComponent,
    RequestsCertificateOwnerComponent
   ],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: []
})
export class FeatureModule {}

