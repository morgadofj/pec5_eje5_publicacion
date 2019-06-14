import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './shared/inmemory-db/fake-backend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { HeaderComponent } from './shared/header/header.component';

import { MaterialModuleModule } from './shared/material-module/material-module.module';
//import { HeaderComponent } from 'src/app/shared/header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
      dataEncapsulation: false
    }),
    BrowserAnimationsModule,
    MaterialModuleModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    //HeaderComponent
  ],
  declarations: [AppComponent, ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
