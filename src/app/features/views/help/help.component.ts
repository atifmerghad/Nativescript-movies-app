
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContentView, GridUnitType, Page, SwipeGestureEventData, } from "@nativescript/core";
import { RouterExtensions } from '@nativescript/angular';
import { Select } from "@ngxs/store";
import {
    ConfigState,

} from "@app/core";
import {
    LayersService,
    SlideUpFadeStagger,
    Icons,
    NavigationService,
    Routes,
} from "@app/core";

@Component({
    selector: "ns-help",
    templateUrl: "help.component.html"
})
export class HelpComponent implements OnInit {
    @Select(ConfigState.staticText) staticText$;

    constructor(
        private page: Page,
        private routerExtensions: RouterExtensions,
        private navigationService: NavigationService
        //private utils: Utils
    ) {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }


}