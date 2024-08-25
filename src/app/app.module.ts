import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { MachinesOverviewComponent } from './pages/machines-overview/machines-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { APP_INITIALIZER, FactoryProvider, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ogdIcons } from './constants/icons';
import { MachineTileComponent } from './components/machine-tile/machine-tile.component';

export function initializeOgdIcons(): () => void {
  const matIconRegistry = inject(MatIconRegistry);
  const domSanitizer = inject(DomSanitizer);

  return () => {
    for (const icon of ogdIcons) {
      matIconRegistry.addSvgIcon(
        icon,
        domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)
      );
    }
  };
}

export function provideOgdIcons(): FactoryProvider {
  return {
    provide: APP_INITIALIZER,
    useFactory: initializeOgdIcons,
    multi: true,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MachinesOverviewComponent,
    HeaderComponent,
    MachineTileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatIconModule],
  providers: [provideOgdIcons()],
  bootstrap: [AppComponent],
})
export class AppModule {}
