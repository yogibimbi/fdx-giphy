import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MockGiphyService {

	constructor() { }

	search(text, page = {index: 0, size: 10}) {
		const resultPage = {
			total: 1071,
			items: [
				{src: "https://media0.giphy.com/media/tMiHhTLvQcavm/200.gif", link: "https://giphy.com/gifs/kittens-jedi-tMiHhTLvQcavm", title: "kittens GIF"},
				{src: "https://media1.giphy.com/media/g7YDlrD5YLqfe/200.gif", link: "https://giphy.com/gifs/cat-animal-g7YDlrD5YLqfe", title: "Cat Kitten GIF"},
				{src: "https://media0.giphy.com/media/kvrvnB158J4fm/200.gif", link: "https://giphy.com/gifs/cat-kitten-kittens-kvrvnB158J4fm", title: "Sweet Kisses Cat GIF"},
				{src: "https://media1.giphy.com/media/CF93EZqOxjdHG/200.gif", link: "https://giphy.com/gifs/cat-kitten-kitty-CF93EZqOxjdHG", title: "kittens GIF"},
				{src: "https://media4.giphy.com/media/A7GowSMfBhq6Y/200.gif", link: "https://giphy.com/gifs/cats-newborn-floofs-A7GowSMfBhq6Y", title: "adorable baby animals GIF"},
				{src: "https://media1.giphy.com/media/102mqDgAb4Kfug/200.gif", link: "https://giphy.com/gifs/kittens-because-102mqDgAb4Kfug", title: "Kittens GIF"},
				{src: "https://media1.giphy.com/media/qP9Rba27rLMXu/200.gif", link: "https://giphy.com/gifs/kittens-aww-qP9Rba27rLMXu", title: "kittens GIF"},
				{src: "https://media1.giphy.com/media/wAmQh1YWjhGms/200.gif", link: "https://giphy.com/gifs/cat-kittens-wAmQh1YWjhGms", title: "kittens GIF"},
				{src: "https://media1.giphy.com/media/A7JE7h6B006qY/200.gif", link: "https://giphy.com/gifs/art-cat-baby-A7JE7h6B006qY", title: "Art Cat GIF"},
				// {src: "https://media0.giphy.com/media/KIR860ssE6ITK/200.gif", link: "https://giphy.com/gifs/nothing-eyebleach-naps-KIR860ssE6ITK", title: "Nothing Kittens GIF"},
			]
		}
		return of(resultPage);
	}
}
