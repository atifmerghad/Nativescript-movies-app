import { Component } from "@angular/core";
import { Page, isIOS, Color } from "@nativescript/core";
import { Select } from "@ngxs/store";
import { overrideLocale } from '@nativescript/localize'
import { Device } from '@nativescript/core'
import { ApplicationSettings } from '@nativescript/core'
import { RouterExtensions } from "@nativescript/angular";
import { localize } from "@nativescript/localize";


import {
  ConfigState,
  ProductState,
  Icons,
  LayersService,
  SlideUpFadeStagger,
  NavigationService,
  Routes,
} from "@app/core";

import { LocalNotifications } from '@nativescript/local-notifications'


@Component({
  moduleId: module.id,
  selector: "ns-account",
  templateUrl: "account.component.html",
  animations: [SlideUpFadeStagger],
})
export class AccountComponent {
  @Select(ConfigState.staticText) staticText$;
  @Select(ProductState.categories) categories$;
  @Select(ProductState.productGroups) productGroups$;
  @Select(ProductState.featuredProduct) featuredProduct$;
  ios = isIOS;
  isRtl = (ApplicationSettings.getString('__app__language__') == 'ar') ? true : false;


  constructor(private page: Page, private layersService: LayersService, private navigationService: NavigationService, private routerExtensions: RouterExtensions,

  ) {
    this.page.actionBarHidden = true;
  }


  navigate() {
    this.navigationService.navigate(Routes.auth_register, null, false);
  }

  mainMenu = [
    {
      index: 0,
      section: 'section 1 ',
      items: [
        {
          name: localize('dashboard.dashboard_profile_paymentMethods'),
          url: 'my-profile',
          icon: 'user.png',
        },
        {
          name: localize('dashboard.dashboard_profile_accountInformation'),
          url: 'account',
          icon: 'explore.png',
        }
      ]
    },
    {
      index: 1,
      section: 'section 2 ',
      items: [
        {
          name: localize('dashboard.dashboard_profile_notifications'),
          url: 'my-profile',
          icon: 'Vector.png',
        },
        {
          name: localize('dashboard.dashboard_profile_inviteFriend'),
          url: 'my-policies',
          icon: 'bookmark.png',
        },
        {
          name: localize('dashboard.dashboard_profile_settings'),
          url: 'my-policies',
          icon: 'store.png',
        },
        {
          name: localize('dashboard.dashboard_profile_termsOfServices'),
          url: 'my-policies',
          icon: 'store.png',
        }
      ]
    }
  ];



  ngOnInit(): void {
  }

  logOut() {
    remove('token');
    this.routerExtensions.navigate(['/home']);
  }

  navigateTo(item) {
    console.log("navigateTonavigateTo =>", item.url)
    this.routerExtensions.navigate(['/' + item.url])
  }
}
