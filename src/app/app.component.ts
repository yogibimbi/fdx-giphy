import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'fdx-giphy';
	search = '';
	page = {
		index: 0,
		items: [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
		size: 10
	};
	result = {
		size: 30 // still no idea how giphy's API does it, so this is just a placeholder
	}
}
