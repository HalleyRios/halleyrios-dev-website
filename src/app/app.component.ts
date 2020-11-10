import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
    private routerSubscription = new Subscription;
    constructor(private router: Router) {
        let subscription: Subscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                gtag('config', 'G-EW6PD3W6XN', { 'page_path': event.urlAfterRedirects });
            }
        });

        this.routerSubscription.add(subscription);
    }

    ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
    }
}
