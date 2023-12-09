import { Routes } from '@angular/router';
import { BusinessComponent } from './components/business/business.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [{path: '', component: HomeComponent},
{path: 'business', component: BusinessComponent}];
