import { Component, OnInit } from '@angular/core';
import { NytService } from '../nyt.service';

@Component({
	selector: 'app-science',
	templateUrl: './science.component.html',
	styleUrls: [ './science.component.css' ]
})
export class ScienceComponent implements OnInit {
	myData;
	constructor(private nytService: NytService) {
		this.nytService.getscience().subscribe((data) => {
			this.myData = data.results;
			console.log(this.myData);
		});
	}
	ngOnInit(): void {}
}
