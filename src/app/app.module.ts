import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfanityService } from './profanity.service';
import { GiphyService } from './giphy.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		CommonModule,
		FormsModule,
		NgbModule
	],
	providers: [
		HttpClient,
		ProfanityService,
		GiphyService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
