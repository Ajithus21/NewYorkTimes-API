import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NytService {
	key;
	artsUrl;
	worldUrl;
	usUrl;
	scienceUrl;
	homeUrl;
	constructor(private httpclient: HttpClient) {
		this.key = '4iO0mtcIRPJeCTBVCranwg2LgOhcBoj3';
		this.artsUrl = 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=';
		this.worldUrl = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=';
		this.usUrl = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=';
		this.scienceUrl = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=';
		this.homeUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=';
	}

	getArts(): Observable<any> {
		return this.httpclient.get(this.artsUrl + this.key);
	}
	getworld(): Observable<any> {
		return this.httpclient.get(this.worldUrl + this.key);
	}
	getus(): Observable<any> {
		return this.httpclient.get(this.usUrl + this.key);
	}
	getscience(): Observable<any> {
		return this.httpclient.get(this.scienceUrl + this.key);
	}
	gethome(): Observable<any> {
		return this.httpclient.get(this.homeUrl + this.key);
	}
}
