import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsAlertsComponent } from './products-alerts/products-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsLoginComponent } from './forms-login/forms-login.component';
import { LoginComponent } from './forms-login/login/login.component';
import { RegistrationComponent } from './forms-login/registration/registration.component';


@NgModule({

 declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductsAlertsComponent,
    ProductDetailsComponent,
    FormsLoginComponent,
    LoginComponent,
    RegistrationComponent,
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : '',
        component : ProductListComponent
      },
      {
        path : 'products/:productId',
        component : ProductDetailsComponent
      },
      {
        path : 'login',
        component : FormsLoginComponent
      }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
