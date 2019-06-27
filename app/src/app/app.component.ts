import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from  "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})


export class AppComponent {

    private is_logged_in:boolean;

    constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private  router:  Router) {
        this.initializeApp();
        this.importLibraries();
        this.is_logged_in = false;
        if (this.is_logged_in) {
            this.router.navigateByUrl('settings');
        }
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

    }

    importLibraries() {
        // get bootstrrap and
    }
}
