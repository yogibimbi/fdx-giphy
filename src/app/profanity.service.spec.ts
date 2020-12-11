import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';

import { ProfanityService } from './profanity.service';

describe('ProfanityService', () => {
	let service: ProfanityService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientModule,
				HttpClientJsonpModule,
			],
			declarations: [
			],
			providers: [
				HttpClient
			]
		});
	});
	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ProfanityService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return true if the term is profane', () => {
		expect(service.check("fuck")).toBeTruthy();
	});

	it('should return false if the term is profane', () => {
		expect(service.check("kittens")).toBeFalsy();
	});
});
