import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit {
	title = 'fdx-giphy';
	search = '';
	page = {
		total: 0,
		index: 1,
		items: [], //0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
		size: 10,
		count: 5,
		ellipses: false,
		rotation: true
	};

	constructor (public profanity: ProfanityService, public giphy: GiphyService) {

	}

	ngOnInit() {
		let search = window.location.search;
		this.search = search.replace(/^\W*(\w+).*/, "$1");	// trim the garbage a bit

	}

	ngAfterViewInit() {
		if (this.search) {
			this.getSearch(this.search);
		}
		console.log("QS", this.search);
	}

	paginationChange(event) {
		console.log("Pagination", event);
		this.page.index = event;
		this.giphy.search(this.search, this.page);
	}

	getSearch(search) {
		// do profanity check
		if (search) {this.search = search}
		this.page.index = 1;
		this.page.total = 0;
		this.page.items = [];
		this.profanity.check(this);
	}
}
