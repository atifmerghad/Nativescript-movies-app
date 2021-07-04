import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SharedModule } from "@app/shared";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { HomeRoutingModule } from "./views-routing.module";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CommonModule,
        HomeRoutingModule,
        SharedModule,
    ],
    declarations: [WelcomeComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ViewsModule { }
