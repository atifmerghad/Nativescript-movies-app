import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
    NativeScriptCommonModule,
    NativeScriptRouterModule,
} from "@nativescript/angular";
import { WelcomeComponent } from "./welcome/welcome.component";

export const routes: Routes = [
    {
        path: "",
        component: WelcomeComponent,
    }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
    ],
})
export class HomeRoutingModule { }
