import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ProfanityService } from './profanity.service';

describe('ProfanityService', () => {
	let service: ProfanityService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientModule,
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

	xit('should return true if the term is profane', () => {
	});

	xit('should return false if the term is profane', () => {
	});
});
