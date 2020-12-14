import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfanityService {
	url = '/profanity';	// the rest is done by the proxy configured in angular.json
	// user = 'yogibimbi';
	key = '6f8fba196ac6f3ab123115463946af91'; // for webpurify
	active = false;

	constructor(private http: HttpClient) {
	}

	check(app) {
		const term = app.search;
		let url = `${this.url}?method=webpurify.live.check&format=json&api_key=${this.key}&text=${term}`; // webpurify
		this.http.get(
			url
    	).subscribe((data) => {
    		this.active = data['rsp'].found > 0;
		});
	}

	getMessage = function () {	// puts a couple of standard images as a slightly undercover
		// profanity message out in the results list
		// defining it as a property, it can be grafted to the mock services
		const images = [
			'orly.gif',
			'mouth.jpg',
			'soap.gif',
			'thinking.gif',
			'seals.gif',
			'here.gif',
			'kittens.gif'
		]
		const baseUrl = '/assets/images/';
		const items = images.map(image => {return {
			src: baseUrl + image,
			link: 'http://' + window.location.host + "?" + image.replace(/\..*/, ''),
			title: 'Click this for something more decent. And a better world.'
		}});
		const page = {
			items: items,
			total: items.length
		}
		return of(page);
	}
}
