import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
    NativeScriptCommonModule,
    NativeScriptRouterModule,
} from "@nativescript/angular";
import { WelcomeComponent } from "./welcome/welcome.component";
import { DownloadComponent } from "./download/download.component";
import { HelpComponent } from "./help/help.component";

export const routes: Routes = [
    {
        path: "",
        component: WelcomeComponent,
    },
    {
        path: "download",
        component: DownloadComponent,
    },
    {
        path: "help",
        component: HelpComponent,
    }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
    ],
})
export class HomeRoutingModule { }
