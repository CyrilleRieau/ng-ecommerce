import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './shared/product.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {AddproductComponent} from './addproduct/addproduct.component';
import { ArrayService } from './shared/array.service';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    ProductComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    ArrayService
   ],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
