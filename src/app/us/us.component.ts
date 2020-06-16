import { Component, OnInit } from '@angular/core';
import { NytService } from '../nyt.service';

@Component({
	selector: 'app-us',
	templateUrl: './us.component.html',
	styleUrls: [ './us.component.css' ]
})
export class UsComponent implements OnInit {
	myData: Array<any>;
	pageOfItems: Array<any>;
	constructor(private nytService: NytService) {
		this.nytService.getus().subscribe((data) => {
			this.myData = data.results;
			console.log(this.myData);
		});
	}

	ngOnInit(): void {}

	onChangePage(pageOfItems: Array<any>) {
		this.pageOfItems = pageOfItems;
	}
}
