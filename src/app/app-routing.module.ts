import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtsComponent } from './arts/arts.component';
import { UsComponent } from './us/us.component';
import { ScienceComponent } from './science/science.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'arts',
		component: ArtsComponent
	},
	{
		path: 'us',
		component: UsComponent
	},
	{
		path: 'science',
		component: ScienceComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
