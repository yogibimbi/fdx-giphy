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
		this.http.get(
			// `${this.url}?user-id=${this.user}&api-key=${this.key}&content=${term}`, {
			`method=webpurify.live.check&format=json&${this.url}?&api-key=${this.key}&text=${term}`, {
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
