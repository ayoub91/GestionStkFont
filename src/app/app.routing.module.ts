import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';


export const appRoutes : Routes = [
    {path: 'produit', component: ProduitComponent},
    {path : 'dashbord', component:DashbordComponent },
    {path : '', redirectTo:'/dashbord', pathMatch: 'full' },
];

@NgModule({
    imports : [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        )
    ],
    exports : [RouterModule]
})


export class AppRoutingModule{

}