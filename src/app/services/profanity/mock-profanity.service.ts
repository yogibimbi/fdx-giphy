import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { ProfanityService } from './profanity.service'; // just to get setMessage

@Injectable({
	providedIn: 'root'
})
export class MockProfanityService {
	active = false;
	
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

	constructor() { }
}
