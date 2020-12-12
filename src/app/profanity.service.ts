import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfanityService {
	// url = 'https://neutrinoapi.net/bad-word-filter';
	url = '/profanity';
	user = 'yogibimbi';
	// key = 'xSXzg0WYih6r9k9JeQg32xVS60nzaAYqPjLCOiJX5nfDohgP'; // neutrinoapi
	key = '6f8fba196ac6f3ab123115463946af91';

	constructor(private http: HttpClient) {
	}

	check(term: String): Boolean {
		let url = `${this.url}?method=webpurify.live.check&format=json&api-key=${this.key}&text=${term}`;
		console.log("URL", url);
		this.http.get(
			url, {
				headers: {
					header: "content-type:application/json"
				}
			}
    	).subscribe((data) => {
			console.log("DATA", data);
		});
		return true;
	}
}
