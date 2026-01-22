import { Routes } from '@angular/router';
import { Portfolio } from "./pages/portfolio/portfolio";
import { About } from "./pages/about/about";
import { Item } from "./pages/item/item";

export const routes: Routes = [
    {path: '', component: Portfolio},
    {path: 'about', component: About},
    {path: 'item', component: Item},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
