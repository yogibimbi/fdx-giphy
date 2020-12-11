import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'fdx-giphy';
	page = {
		index: 0,
		items: [1,2,3,4,5,6,7,8,9,10,11]
	};
	result = {
		size: 3 // still no idea how giphy's API does it, so this is just a placeholder
	}
}
