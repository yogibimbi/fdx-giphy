import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { ProfanityService } from './profanity.service';
import { GiphyService } from './giphy.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'fdx-giphy';
	search = '';
	page = {
		total: 200,
		index: 2,
		items: [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
		size: 10,
		count: 5,
		ellipses: false,
		rotation: true
	};

	constructor (public profanity: ProfanityService, public giphy: GiphyService) {

	}

	paginationChange(event) {
		console.log("Pagination", event);
		this.page.index = event;
		this.giphy.search(this.search, this.page);
	}

	getSearch() {
		// do profanity check
		this.profanity.check(this.search);
		// send to giphy
		this.giphy.search(this.search, this.page);
	}
}
