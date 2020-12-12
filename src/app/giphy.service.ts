import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class GiphyService {
	user = '';
	key = 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6';
	url = '/giphy';	// the rest is done by the proxy configured in angular.json
	currentSearch = '';

	constructor(private http: HttpClient) {
	}

	search(text, page) {
		let url = `${this.url}?&api_key=${this.key}&q=${text}&limit=${page.size}&offset=${(page.index - 1) * page.size}`;
		this.http.get(
			url, {
				headers: {
					header: "content-type:application/json"
				}
			}
    	).subscribe((data) => {
    		this.currentSearch = text;
			console.log("DATA", data);
			page.total = data['pagination'].total_count;
			let pics = data['data'];
			page.items = pics.map(pic => { return {
				src: pic.images.fixed_height.url,
				link: pic.url,
				title: pic.title
			}});
		});

	}
}
