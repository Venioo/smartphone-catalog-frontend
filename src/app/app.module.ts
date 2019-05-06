import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PhonesListComponent} from './components/phones-list/phones-list.component';
import {PhoneDetailsComponent} from './components/phone-details/phone-details.component';
import {RouterModule, Routes} from '@angular/router';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule, MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComparisionComponent} from './components/comparision/comparision.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PaginatorComponent} from './components/paginator/paginator.component';

const routes: Routes = [
  {path: '', component: PhonesListComponent},
  {path: 'phones/:id', component: PhoneDetailsComponent},
  {path: 'comparision', component: ComparisionComponent}];

@NgModule({
  declarations: [
    AppComponent,
    PhonesListComponent,
    PhoneDetailsComponent,
    MainNavComponent,
    ComparisionComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
