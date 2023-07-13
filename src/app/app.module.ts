import { HttpClientModule } from '@angular/common/http'
import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { appInitializer } from '@bp-core/init/appInitializer'
import { ConfigService } from '@bp-core/services/config/config.service'
import { AlertsComponent } from '@services/alerts/alerts.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlertsComponent,
    HttpClientModule,
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [ConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
