import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { OverlapComponent } from './components/overlap/overlap.component';



export const routes: Routes = [{path: 'app-main', component: MainComponent},
{path: 'app-overlap', component: OverlapComponent }];
