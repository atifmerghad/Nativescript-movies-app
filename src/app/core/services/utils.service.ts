import { Injectable } from "@angular/core";
import { ApplicationSettings } from '@nativescript/core'
import { LocalNotifications } from '@nativescript/local-notifications'
import { Component } from "@angular/core";
import { Page, isIOS, Color } from "@nativescript/core";
import { Select } from "@ngxs/store";
import { overrideLocale } from '@nativescript/localize'
import { Device } from '@nativescript/core'
import { RouterExtensions } from "@nativescript/angular";
import {
    ConfigState,
    ProductState,
    Icons,
    LayersService,
    SlideUpFadeStagger,
    NavigationService,
    Routes,
} from "@app/core";

@Injectable({
    providedIn: "root",
})
export class UtilsService {

    static isRtl = (ApplicationSettings.getString('__app__language__') == 'ar') ? true : false;


    constructor(private page: Page, private layersService: LayersService, private navigationService: NavigationService, private routerExtensions: RouterExtensions) { }


    changeLanguage(): void {
        try {
            const deviceLang = ApplicationSettings.getString('__app__language__');
            const lang = (deviceLang == 'ar') ? 'en' : 'ar';
            const localeOverriddenSuccessfully = overrideLocale(lang);
            setTimeout(() => {
                this.navigationService.navigate(Routes.auth_login, { animated: false }, true);
                this.navigationService.navigate(Routes.auth_login_replicat, { id: 1 }, false);
            }, 2000)
        }
        catch (e) {
            console.log("error : ", e);
        }
    }

    static enableNotification(): void {
        LocalNotifications.hasPermission()
        LocalNotifications.schedule([
            {
                id: 1, // generated id if not set
                title: 'The title',
                body: 'Recurs every minute until cancelled',
                ticker: 'The ticker',
                color: new Color('red'),
                badge: 1,
                groupedMessages: ['The first', 'Second', 'Keep going', 'one more..', 'OK Stop'], //android only
                groupSummary: 'Summary of the grouped messages above', //android only
                ongoing: true, // makes the notification ongoing (Android only)
                icon: 'res://heart',
                image: 'https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg',
                thumbnail: true,
                interval: 'minute',
                channel: 'My Channel', // default: 'Channel'
                sound: 'customsound-ios.wav', // falls back to the default sound on Android
                at: new Date(new Date().getTime() + 10 * 1000) // 10 seconds from now
            }
        ]).then(
            scheduledIds => {
                console.log('Notification id(s) scheduled: ' + JSON.stringify(scheduledIds))
            },
            error => {
                console.log('scheduling error: ' + error)
            }
        )
        // this.navigationService.navigate(Routes.auth_register, null, false);
    }


}
