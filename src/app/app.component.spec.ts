import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MockProfanityService as ProfanityService } from './services/profanity/mock-profanity.service';
import { MockGiphyService as GiphyService } from './services/giphy/mock-giphy.service';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let fixture, component, compiled, page;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				CommonModule,
				FormsModule,
				HttpClientModule,
				NgbModule
			],
			declarations: [
				AppComponent
			],
			providers: [
				HttpClient,
				ProfanityService,
				GiphyService
			]
		}).compileComponents();
	});
	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		component.giphy = TestBed.get(GiphyService);
		component.profanity = TestBed.get(ProfanityService);
		fixture.detectChanges();
		compiled = fixture.nativeElement;
		page = {
			index: 1,
			items: [0, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
			size: 25,
			count: 5,
			ellipses: false,
			rotation: true
		};
		component.page = page;
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'fdx-giphy'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('fdx-giphy');
	});

	/* ok, after preliminary study of the APIs and the task, here are the test conditions
		
		one basic decision that goes untested and that I adhere to whenever I remember:
		indentation is one tab. Don't do 2 spaces. One tab lets everybody choose their
		level of indentation in the editor without messing with the number of characters
		for different people. Two spaces is for anal control freaks who want everybody to
		look the same. If I don't have to, I don't do spaces indentation, only if company
		best practices demand it and I get paid for my pain. I am not going to start a
		revolution about it, but here it's my rodeo, so deal with it. It's also one less
		character per line if I use one tab over two spaces, before code uglification.

		Next: No tests for borderline cases where not deemed necessary. If some punk-ass
		kid wants to break the layout by making stuff very narrow, small, big,play around
		with font sizes - be my guest, I am not testing for that. It is also
		assumed, that bootstrap knows how to do its job, so, if the first visual impression
		is oK and nothing totally distracting goes on with the layout, it is deemed ok.
		Unless I decide it isn't. I am the Product Owner and developer in one person. Yes,
		assumption is The Mother of All F...ups, and I have a God Complex, but that can't
		be helped, I'm cool with that. Not going to lose any sleep about it.

		For the other test cases that are defined beforehand: It takes as long as it
		takes, we're not cutting any corners.

		So, let's get rolling!
	*/

	/* the text search box shall fill up the rest of the search floexbox until it is
		80% of the entire width. If the viewport becomes too narrow, let's hope for graceful
		breakdown. Unless there is something totally wild going on, I am not going to sweat
		the rest.
	*/

	it('should extend the search box to fill the header', () => {
		const header = compiled.querySelector('header');
		// console.log("header", header);
		const nav = header.querySelector('nav');
		const textBox = header.querySelector('input');
		// margins screw the widths, so let's be rid of them!
		textBox.style.margin = "0";
		const button = header.querySelector('button');
		const label = header.querySelector('label');
		const width = function(element) {
			return element.getBoundingClientRect().width;
		}
		// keep the console.log around, it might still be useful
		// console.log("widths", width(nav), width(button) + width(textBox) + width(label));
		// it looks very suspect that the widths actually add up with bazillions of
		// decimals, but it seems to work ok, so don't round it up yet; but it might be
		// a source of error in less exact settings, so keep that in mind
		expect(width(textBox)).toEqual(width(nav) - (width(button) +  width(label)));
	});

	it('the vertical elements should all add up to the height of the frame', () => {
		component.page.items = [1,2,3,4,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		fixture.detectChanges();
		const appRoot = compiled;
		const header = appRoot.querySelector('header');
		const results = appRoot.querySelector('.results');
		// margins screw the heights, so let's be rid of them!
		results.style.margin = "0";
		const footer = appRoot.querySelector('footer');
		const height = function(element) {
			return element.getBoundingClientRect().height;
		}
		// keep the console.log around, it might still be useful
		// console.log("heights", height(appRoot), height(header), height(results), height(footer));
		expect(height(appRoot)).toEqual(height(header) + (height(results) +  height(footer)));
	});

	it('.results should have as many elements as there are items, if items < page.size', () => {
		component.page.items = [1,2,3,4];
		component.page.size = 10;
		fixture.detectChanges();
		const results = compiled.querySelector('.results');
		const items = results.querySelectorAll('ul li');

		expect(items.length).toEqual(4);
	});

	// well, the number of items is limited in the service, but keep this around as a reminder
	it('.results should have an overflow of elements that reflects the page size, if items > page.size', () => {
		component.page.items = [1,2,3,4, 5, 6, 7, 8, 9];
		component.page.size = 5;
		fixture.detectChanges();
		const results = compiled.querySelector('.results');
		const items = results.querySelectorAll('ul li');

		expect(items.length).toEqual(4);
	});

	/* Overflow from the search list auto scrolls: If you make it very narrow or very low,
		I'll see if that bugs me, if not - hakuna matata.
	*/
	it('.results should have a scrollbar if the list is longer than .results', () => {
		component.page.items = [1,2,3,4,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		fixture.detectChanges();
		const results = compiled.querySelector('.results');
		results.style.height = "200px"
		const list = results.querySelector('ul');
		list.style.height = "300px"
		results.scrollTop = 1;
		console.log("scroll on", results.scrollTop, list.getBoundingClientRect());

		expect(results.scrollTop).toEqual(1);
	});

	it('.results should not have a scrollbar if the list is shorter than .results', () => {
		component.page.items = [1];
		fixture.detectChanges();
		const results = compiled.querySelector('.results');
		results.style.height = "200px"
		const list = results.querySelector('ul');
		list.style.height = "100px"
		results.scrollTop = 1;
		console.log("scroll off", results.scrollTop, list.getBoundingClientRect());

		expect(results.scrollTop).toEqual(0);
	});

	it("if there are no results, don't show the result list", () => {
		component.page.items = [];
		fixture.detectChanges();
		const results = compiled.querySelector('.results');

		expect(results).toBe(null);
	});

	it("if there are no results, don't show the footer", () => {
		component.page.items = ([]);
		fixture.detectChanges();
		const footer = compiled.querySelector('footer');

		expect(footer).toBe(null);
	});

	it("if there are results, show the result list", () => {
		component.page.items = [1,2,3,4];
		fixture.detectChanges();
		const results = compiled.querySelector('.results');

		expect(results).not.toBe(null);
	});

	it("if there are results, show the footer", () => {
		component.page.items = [1,2,3,4,5];
		fixture.detectChanges();
		const footer = compiled.querySelector('footer');

		expect(footer).not.toBe(null);
	});

	// From what I have read about the pagination component, it does not seem to have an
	// easy way to change the page length. Headscratcher. Maybe I just missed it. If I don't
	// find it, use 10 results per page also for the giphy API, because that one seems to
	// have an easier way to set it. Use page length 10 for the max test then.
	it("there should be 9 elements in the paginator if we are set for max", () => {
		component.page.total = 200;
		fixture.detectChanges();
		const footer = compiled.querySelector('footer');
		const paginatorItems = footer.querySelectorAll("li.page-item");

		expect(paginatorItems.length).toBe(component.page.count + 4);
	});

	it("there should be 8 elements in the paginator if we have only 100 elements @ 25 items / page", () => {
		component.page.total = 100; // this makes it just 4 pages
		fixture.detectChanges();
		const footer = compiled.querySelector('footer');
		const paginatorItems = footer.querySelectorAll("li.page-item");

		expect(paginatorItems.length).toBe(component.page.count - 1 + 4);
	});

	it("page 2 should be selected if page.index is 1", () => {
		component.search = "something";
		component.page.total = 100;
		component.page.index = 3;
		fixture.detectChanges();
		const footer = compiled.querySelector('footer');
		const activePage = compiled.querySelector('footer li.page-item.active');

		expect(activePage.textContent).toBe("3");
	});

	/* Paginate first, previous, and only a window of 5 pages, next and last. If it's there, it's
		oK. Don't test for any funny page width / height breakdowns as long as they don't get
		totally annoying.
		All other result numbers, widths, etc., as long as there is not something totally
		weird going on with the pagination component, we're good. Everything else would
		probably require too much digging into the component. Ain't nobody got time 4 dat.
	*/

	/* If it does not pass the profanity test, show a prepared result of motivational
		and wholesome images.
	*/

	it("should set css class 'profane' on input and button if profanity is active", () => {
		component.page.total = 100;
		component.profanity.active = true;
		component.updateSearch();
		fixture.detectChanges();
		const header = compiled.querySelector('header');
		const textBox = header.querySelector('input');
		const button = header.querySelector('button');

		const profane = textBox.className.split(/ /).indexOf('profane') > -1 &&
						button.className.split(/ /).indexOf('profane') > -1
		expect(profane).toBeTrue();
	});

	it("should not have css class 'profane' on input and button if profanity is inactive", () => {
		component.page.total = 100;
		component.profanity.active = false;
		component.updateSearch();
		fixture.detectChanges();
		const header = compiled.querySelector('header');
		const textBox = header.querySelector('input');
		const button = header.querySelector('button');

		const profane = textBox.className.split(/ /).indexOf('profane') > -1 &&
						button.className.split(/ /).indexOf('profane') > -1
		expect(profane).toBeFalse();
	});


	// Does the error message appear?
	it('.results should have as an overflow of elements that reflects the page size, if items > page.size', () => {
		component.page.items = [1,2,3,4, 5, 6, 7, 8, 9]; // should be overwritten by the error sequence
		component.page.size = 5; // dto
		component.page.total = 100;
		component.profanity.active = true;
		component.updateSearch();
		fixture.detectChanges();
		const results = compiled.querySelector('.results');
		const items = results.querySelectorAll('ul li');

		expect(items.length).toEqual(7);
	});

	// That would be all for now. Let's see if more hunger comes while we are eating...
});
