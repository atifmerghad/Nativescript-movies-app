import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
    NativeScriptCommonModule,
    NativeScriptRouterModule,
} from "@nativescript/angular";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AccountComponent } from "./account/account.component";

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "login_replicat",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent,
    },
    {
        path: "account",
        component: AccountComponent,
    }

];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
    ],
})
export class AuthRoutingModule { }
