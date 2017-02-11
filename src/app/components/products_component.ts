import { Component, NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, Routes } from '@angular/router';

import { MainComponent } from './products/main_component';
import { InterestComponent } from './products/interest_component';
import { SpotifyComponent } from './products/spotify_component';
import { ByIdComponent } from './products/by_id_component';

@Component({
	selector: 'products',
	templateUrl: './products_component.html'
})

export class ProductsComponent {

	constructor(private router: Router, private route: ActivatedRoute) {

	}

	goToProduct(id: string): void {
		this.router.navigate(['./', id], {relativeTo: this.route});
	}
}

export const routes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full'},
	{ path: 'main', component: MainComponent },
	{ path: 'interest', component: InterestComponent },
	{ path: 'spotify', component: SpotifyComponent },
	{ path: ':id', component: ByIdComponent}
];

@NgModule({
	declarations: [
		ProductsComponent,
		MainComponent,
		InterestComponent,
		SpotifyComponent,
		ByIdComponent
	],
	exports: [
		ProductsComponent,
		MainComponent
	],
	imports: [
		RouterModule
	]
})

export class ProductsComponentModule {}