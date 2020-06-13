import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ArtsComponent } from './arts/arts.component';
import { ScienceComponent } from './science/science.component';
import { UsComponent } from './us/us.component';

@NgModule({
	declarations: [ AppComponent, NavbarComponent, HomeComponent, ArtsComponent, ScienceComponent, UsComponent ],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
