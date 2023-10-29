import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketComponent } from './market/market.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductCreateComponent } from './product-create/product-create.component';

const routes: Routes = [
  {
  path: "market",
  component: MarketComponent
},
{
  path: "dashboard",
  component: DashboardComponent
},
{
  path: "cart",
  component: CartComponent
},
{ 
  path: 'login', 
  component: LoginComponent 
},
{ 
  path: 'register', 
  component: RegisterComponent 
},
{
  path: 'product',
  component: ProductComponent,
  children: [
    { path: 'create', component: ProductCreateComponent },
    { path: ':id', component: ProductDetailComponent },
    { path: 'edit/:id', component: ProductEditComponent }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
