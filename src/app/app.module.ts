import {
  GestureConfig,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PhonesListComponent} from './components/phones-list/phones-list.component';
import {PhoneDetailsComponent} from './components/phone-details/phone-details.component';
import {RouterModule, Routes} from '@angular/router';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';

import {ComparisionComponent} from './components/comparision/comparision.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {NgMatSearchBarModule} from 'ng-mat-search-bar';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {PairWiseComparisionComponent} from './components/pair-wise-comparision/pair-wise-comparision.component';

const routes: Routes = [
  {path: '', component: PhonesListComponent},
  {path: 'phones/:id', component: PhoneDetailsComponent},
  {path: 'comparision', component: ComparisionComponent},
  {path: 'pair-wise-comparision', component: PairWiseComparisionComponent}];

@NgModule({
  declarations: [
    AppComponent,
    PhonesListComponent,
    PhoneDetailsComponent,
    MainNavComponent,
    ComparisionComponent,
    PaginatorComponent,
    LoadingSpinnerComponent,
    PairWiseComparisionComponent
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
    NgMatSearchBarModule,
    MatStepperModule,
    MatCheckboxModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
  ],
  exports: [RouterModule],
  providers: [{provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
