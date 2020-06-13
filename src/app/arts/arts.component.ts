import { Component, OnInit } from '@angular/core';
import { NytService } from '../nyt.service';

@Component({
	selector: 'app-arts',
	templateUrl: './arts.component.html',
	styleUrls: [ './arts.component.css' ]
})
export class ArtsComponent implements OnInit {
	myData;
	constructor(private nytService: NytService) {
		this.nytService.getArts().subscribe((data) => {
			this.myData = data.results;
			console.log(this.myData);
		});
	}

	ngOnInit(): void {}
}
