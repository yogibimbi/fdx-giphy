import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';

import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
	let service: GiphyService;

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
		service = TestBed.inject(GiphyService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return something', () => {
		expect(service.search("kittens", {})).toBeFalsy();
	});
});
