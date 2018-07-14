import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
//    { path: "", redirectTo: "/items", pathMatch: "full" },
//    { path: "items", component: ItemsComponent },
//    { path: "item/:id", component: ItemDetailComponent },
    { path: "", redirectTo: "/menu", pathMatch: "full" },
    { path: "menu", component: MenuComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }