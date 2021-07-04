import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "@nativescript/core";
import { map, switchMap } from "rxjs/operators";
import { Store } from "@ngxs/store";
import {
  Icons,
  NavigationService,
  Routes,
  SlideUpFadeStagger,
  ProductState,
} from "@app/core";
import { registerElement } from "@nativescript/angular";
import { Video } from 'nativescript-videoplayer';
registerElement("VideoPlayer", () => Video);

@Component({
  moduleId: module.id,
  selector: "ns-details",
  templateUrl: "details.component.html",
  animations: [SlideUpFadeStagger],
})
export class DetailsComponent {
  icons = Icons;
  productId$ = this.activatedRoute.params.pipe(
    map((params) => parseInt(params.id))
  );
  productDetails$ = this.productId$.pipe(
    switchMap((productId) =>
      this.store.select(ProductState.productById(productId))
    )
  );

  constructor(
    private store: Store,
    private page: Page,
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService
  ) {
    this.page.actionBarHidden = true;
  }

  navigateToProductDetails(id: number): void {
    this.navigationService.navigate(Routes.details, { id: id });
  }

  startVideo = false;
  openVideo(b) {
    this.startVideo = b;
  }
}
