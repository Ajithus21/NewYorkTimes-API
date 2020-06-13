import { Component, OnInit } from '@angular/core';
import { NytService } from '../nyt.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	myData;
	constructor(private nytService: NytService) {
		this.nytService.getworld().subscribe((data) => {
			this.myData = data.results;
			console.log(this.myData);
		});
	}

	ngOnInit(): void {}
}
