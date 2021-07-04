import { platformNativeScriptDynamic, registerElement } from "@nativescript/angular";
import { Application } from '@nativescript/core'
import { AppModule } from "./app/app.module";
import { androidLaunchEventLocalizationHandler } from '@nativescript/localize'

platformNativeScriptDynamic().bootstrapModule(AppModule);

Application.on(Application.launchEvent, args => {
    if (args.android) {
        androidLaunchEventLocalizationHandler()
    }
})