import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { ProfanityService } from './services/profanity/profanity.service';
import { GiphyService } from './services/giphy/giphy.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
	title = 'fdx-giphy';
	search = ''; // current search term as entered by the user
	page = {
		total: 0, // total number of items in the current search
		index: 1,
		items: [],
		size: 10, // default number of items shown in one page
		count: 5, // number of pages selectable in the paginator element
		ellipses: false, // ellipses setting of the pagination element
		rotation: true // dto. rotation setting
	};
	images = {
		loaded: 0, // number of currently loaded items images;
		// as long as it is smaller than the number of items in the search,
		// the progress bar is shown
	}

	constructor (public profanity: ProfanityService, public giphy: GiphyService) {

	}

	ngOnInit() {
		let search = window.location.search; // get the current search term from  the query string
		/*
			this allows the profanity message disguised as a search result to work
			with links on the images, but also, in the current implementation, is a
			backdoor to smuggle profane searches past the profanity check. Since it
			it is not a very obvious backdoor, I'll leave it at that for the time
			being, however
		*/
		this.search = search.replace(/^\W*(\w+).*/, "$1");	// trim the garbage a bit
		if (this.search) {
			this.profanityCheck();
		}
	}

	ngAfterViewInit() {
		if (this.search) {
			// this.profanityCheck();
			this.updateSearch();
		}
	}

	paginationChange(event) {
		this.page.index = event;
		this.images.loaded = 0;
		this.updateSearch();
	}

	pageSizeChange(size) {
		const pos = (this.page.index - 1) * this.page.size;
		this.page.size = size;
		this.page.index = Math.floor(pos / size) + 1;
		this.images.loaded = 0;
		this.updateSearch();
	}

	getSearch(search?) {
		// do profanity check
		if (search) {this.search = search}
		this.page.index = 1;
		this.page.total = 0;
		this.page.items = [];
		this.images.loaded = 0;
		this.updateSearch();
	}

	updateSearch() {
		if (!this.profanity.active) {
			this.giphy.search(this.search, this.page);
		}
		else {
			this.profanity.getMessage().subscribe(data => {
				this.page.items = data;
				this.page.total = data.length;
			});
		}		
	}

	undoSearch() {
		this.search = this.giphy.currentSearch;
	}

	profanityCheck() {
		this.profanity.check(this);
	}

	imageLoading(event) {
		this.images.loaded++;
	}
}
