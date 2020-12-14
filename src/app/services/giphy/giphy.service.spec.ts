import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing';

import test_data from './giphy.test-data.json';

import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
	let service: GiphyService;
	let httpTestingController;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			]
		});
	});
	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(GiphyService);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('search should return something', () => {
		const text = 'puppies';
		const page = {
			size: 10,
			index: 1,
		}
		const testData: any = test_data;	//"rsp":{"@attributes":{"stat":"ok"},"method":"webpurify.live.check","format":"rest","found":found,"api_key":"6f8fba196ac6f3ab123115463946af91"}};
		service.search(text, page).subscribe(data => {
			console.log("DATAx", data);
			expect(data.items.length).toBe(10);
		})
		const url = `${service.url}?&api_key=${service.key}&q=${text}&limit=${page.size}&offset=${(page.index - 1) * page.size}`;
		console.log("URL", url);
		const req = httpTestingController.expectOne(url);
		expect(req.request.method).toEqual('GET');
		req.flush(testData);
	});

	// Test "kittens" for the giphy API. Do we get 10 results?

	// Test "" for the giphy API. Do we get an empty result?

	// Change the pagination length to 13 for the API and see if we get 13 results,
	// just to make sure that the 10 from before weren't all there were.

	// Remember the first item of the last test. Advance the page by 2. Does the first
	// result change?

	// Remember the first item of the last test. Do "next". Does the first
	// result change?

	// Remember the first item of the last test. Do "previous". Does the first
	// result change?

	// Remember the first item of the last test. Go back by 1. Does the first
	// result change?

	// Remember the first item of the last test. Go to "last". Does the first
	// result change?

	// Remember the first item of the last test. Go to "first". Does the first
	// result change?

	// Test "" again. See if there is still an empty result. APIs can be weird like that.

});
