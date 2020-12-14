import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing';
// import { HttpClient } from '@angular/common/http';

import { ProfanityService } from './profanity.service';

describe('ProfanityService', () => {
	let service: ProfanityService;
	// let httpClient: HttpClient;
	let httpTestingController;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			]
		});
	});
	beforeEach(() => {
		// httpClient = TestBed.inject(HttpClient);
		service = TestBed.inject(ProfanityService);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return true if the term is profane', () => {
		const term = 'fuck';
		const found = 1;
		const testData: any = {"rsp":{"@attributes":{"stat":"ok"},"method":"webpurify.live.check","format":"rest","found":found,"api_key":"6f8fba196ac6f3ab123115463946af91"}};
		service.check(term).subscribe(profane => {
			expect(profane).toBeTrue();
		})
		const url = `${service.url}?method=webpurify.live.check&format=json&api_key=${service.key}&text=${term}`; // webpurify
		console.log("URL", url);
		const req = httpTestingController.expectOne(url);
		expect(req.request.method).toEqual('GET');
		req.flush(testData);
	});
	// Test "kittens" next. Do we get the green light?
	it('should return false if the term is not profane', () => {
		const term = 'kittens';
		const found = 0;
		const testData: any = {"rsp":{"@attributes":{"stat":"ok"},"method":"webpurify.live.check","format":"rest","found":found,"api_key":"6f8fba196ac6f3ab123115463946af91"}};
		service.check(term).subscribe(profane => {
			expect(profane).toBeFalse();
		})
		const url = `${service.url}?method=webpurify.live.check&format=json&api_key=${service.key}&text=${term}`; // webpurify
		const req = httpTestingController.expectOne(url);
		expect(req.request.method).toEqual('GET');
		req.flush(testData);
	});
});
