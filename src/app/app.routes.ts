import { Routes } from "@angular/router";
import { ProductsComponent } from "";
import { FicheProductComponent } from "";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";


export const appRoutes:Routes = [
    {path:'products', component: ProductsComponent},
    {path:'products/:id', component: FicheProduitComponent},
    {path:'', pathMatch:'full', redirectTo:'/products'},
    {path:'**', component:PagenotfoundComponent}
]; 