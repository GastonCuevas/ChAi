import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OverlapComponent } from './components/overlap/overlap.component';
import { Overlap2Component } from './components/overlap2/overlap2.component';
import { Overlap3Component } from './components/overlap3/overlap3.component';
import { Overlap4Component } from './components/overlap4/overlap4.component';



export const routes: Routes = [{path: 'app-main', component: MainComponent},
{path: 'app-nav-bar', component: NavBarComponent},
{path: 'app-overlap', component: OverlapComponent },
{path: 'app-overlap2', component: Overlap2Component},
{path: 'app-overlap3', component: Overlap3Component},
{path: 'app-overlap4', component: Overlap4Component}];
