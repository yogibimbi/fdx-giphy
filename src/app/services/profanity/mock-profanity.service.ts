import { Injectable } from '@angular/core';

import { ProfanityService } from './profanity.service'; // just to get setMessage

@Injectable({
	providedIn: 'root'
})
export class MockProfanityService {
	active = false;
	
	setMessage(app) {
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
		app.page.items = images.map(image => {return {
			src: baseUrl + image,
			link: 'http://' + window.location.host + "?" + image.replace(/\..*/, ''),
			title: 'Click this for something more decent. And a better world.'
		}});
	}

	constructor() { }
}
