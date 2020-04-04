import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JsonPlaceHolderService } from './services/jsonPlaceHolder.service';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [ JsonPlaceHolderService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
