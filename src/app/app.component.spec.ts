import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let fixture, component, compiled;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				CommonModule,
				FormsModule,
				NgbModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	});
	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		compiled = fixture.nativeElement;
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

	/* Overflow from the search list auto scrolls: If you make it very narrow or very low,
		I'll see if that bugs me, if not - hakuna matata.
	*/
	it('.results should have a scrollbar if the list is longer than .results', () => {
		const results = compiled.querySelector('.results');
		results.style.height = "200px"
		const list = results.querySelector('ul');
		list.style.height = "300px"
		results.scrollTop = 1;
		console.log("scroll", results.scrollTop, list.getBoundingClientRect());

		expect(results.scrollTop).toEqual(1);
	});

	it("if there are no results, don't show the result list", () => {
		component.page.items = [];
		fixture.detectChanges();
		const results = compiled.querySelector('.results');

		expect(results).toBe(null);
	});

	it("if there are no results, don't show the footer", () => {
		component.page.items = [];
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

	// Paginate first, previous, and only a window of 5 pages, next and last. If it's there, it's
	// oK. Don't test for any funny page width / height breakdowns as long as they don't get
	// totally annoying.
	// All other result numbers, widths, etc., as long as there is not something totally
	// weird going on with the pagination component, we're good. Everything else would
	// probably require too much digging into the component. Ain't nobody got time 4 dat.

	// Make sure only a max of 5 pages are shown.

	// If there are less pages, show just those less pages in pagination.

	// If it does not pass the profanity test, say something corny and don't give a result.
	// The API I have chosen gives me 50 attempts per day for my user, so if it works apparetnly,
	// with one word (we use everybody's darling "fuck") that's good, we won't throw the
	// dictionary at it.
	// So test "fuck" first. Do we get a boo-boo?

	// Does the error message appear?

	// Test "kittens" next. Do we get the green light?

	// is the error message gone?

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

	// That would be all for now. Let's see if more hunger comes while we are eating...
});
