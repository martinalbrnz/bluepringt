import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { appInitializer } from '@bp-core/init/appInitializer'
import { ConfigService } from '@bp-core/services/config/config.service'
import { SidebarComponent } from '@components/sidebar/sidebar.component'
import { AlertsComponent } from '@services/alerts/alerts.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({ declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AlertsComponent,
        SidebarComponent], providers: [
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer,
            multi: true,
            deps: [ConfigService]
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
