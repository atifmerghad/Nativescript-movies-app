import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "@app/shared";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NativeScriptLocalizeModule } from '@nativescript/localize/angular'
import { AccountComponent } from "./account/account.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        NativeScriptLocalizeModule
    ],
    declarations: [LoginComponent, RegisterComponent, AccountComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AuthModule { }
