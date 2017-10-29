import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
//import { FicheProductComponent } from "";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AddproductComponent } from "./addproduct/addproduct.component";


export const appRoutes:Routes = [
    {path:'products', component: ProductComponent},
    {path:'products/new', component: AddproductComponent},
   // {path:'products/:id', component: FicheProduitComponent},
    {path:'', pathMatch:'full', redirectTo:'/products'},
    {path:'**', component:PagenotfoundComponent}
]; 