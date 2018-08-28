import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {Catagories} from "../services/Catagories";

import {MyApp} from "./app.component";

import {HomePage} from "../pages/home/home";
import {NotificationsPage} from "../pages/notifications/notifications";
import {CategoriesPage} from "../pages/categories/categories";
import {BasketPage} from "../pages/basket/basket";
// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotificationsPage,
    CategoriesPage,
    BasketPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotificationsPage,
    CategoriesPage,
    BasketPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    Catagories,
  ]
})

export class AppModule {
}
