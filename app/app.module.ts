import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";

import { DishdetailComponent } from './dishdetail/dishdetail.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
 import { NativeScriptHttpModule } from "nativescript-angular/http";
 import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

 import { MenuComponent } from './menu/menu.component';

 import { DishService } from './services/dish.service';
 import { PromotionService } from './services/promotion.service';
 import { LeaderService } from './services/leader.service';
 import { FavoriteService } from './services/favorite.service';
 import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
 
 import { baseURL } from './shared/baseurl';
 import { DrawerComponent } from './shared/drawer/drawer.component';
 import { HomeComponent } from "./home/home.component";
 import { ContactComponent } from "./contact/contact.component";
 import { AboutComponent } from "./about/about.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            'fa': './fonts/font-awesome.min.css'
        })  
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        DishdetailComponent,
        DrawerComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent
    ],
    providers: [
        {provide: 'BaseURL', useValue: baseURL},
        DishService,
        ProcessHTTPMsgService,
        FavoriteService,
        PromotionService,
        LeaderService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
