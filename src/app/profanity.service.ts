import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfanityService {
	url = '/profanity';	// the rest is done by the proxy configured in angular.json
	user = 'yogibimbi';
	key = '6f8fba196ac6f3ab123115463946af91'; // for webpurify

	constructor(private http: HttpClient) {
	}

	check(term: String) {
		let url = `${this.url}?method=webpurify.live.check&format=json&api_key=${this.key}&text=${term}`; // webpurify
		// console.log("URL", url);
		this.http.get(
			url
    	).subscribe((data) => {
			console.log("DATA", data);
		});
	}
}
