import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
  { path: "", redirectTo: "/views", pathMatch: "full" },
  {
    path: "views",
    loadChildren: () =>
      import("./features/views/views.module").then((m) => m.ViewsModule),
  }, 
  {
    path: "auth",
    loadChildren: () =>
      import("./features/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./features/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "details",
    loadChildren: () =>
      import("./features/details/details.module").then((m) => m.DetailsModule),
  },
  {
    path: "config",
    loadChildren: () =>
      import("./features/config/config.module").then((m) => m.ConfigModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
