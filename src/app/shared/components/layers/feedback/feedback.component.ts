import { Component, OnInit } from "@angular/core";
import { EventData, isAndroid, View } from "@nativescript/core";
import { LayersService, Icons, Fade } from "@app/core";
import { tap, map, switchMap } from "rxjs/operators";

@Component({
  moduleId: module.id,
  selector: "ns-feedback",
  templateUrl: "feedback.component.html",
  animations: [Fade],
})
export class FeedbackComponent {

  state$ = this.layersService
    .getLayers$()
    .pipe(map((layers) => layers.feedbackComponent));

  message$ = this.state$.pipe(
    map((state) => state.message),
    tap((message) => (this._message = message))
  ).subscribe(item => item);



  public _message: string;
  isAndroid = isAndroid
  icons = Icons;
  private _shade: View;
  languageTags = [
    { text: "English", selected: true },
    { text: "Spanish", selected: false },
    { text: "French", selected: false },
  ];

  durationTags = [
    { text: "Short", selected: true },
    { text: "Medium", selected: false },
    { text: "Long", selected: false },
  ];

  constructor(private layersService: LayersService) { }

  shadeLoaded(args: EventData): void {
    this._shade = <View>args.object;
    setTimeout(() => {
      this._shade.animate({
        opacity: 1,
        duration: 150,
      });
    }, 100);
  }

  apply(): void {
    this.close();
  }

  close(): void {
    this._shade.animate({
      opacity: 0,
      duration: 100,
    });
    setTimeout(() => {
      this.layersService.closeFeedback();
    }, 50);
  }
}
