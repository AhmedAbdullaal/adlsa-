import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './component/login/login.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule, SharedModule, TranslateModule],
  exports: [AuthRoutingModule],
  providers: [
  ]
})
export class AuthModule {}
