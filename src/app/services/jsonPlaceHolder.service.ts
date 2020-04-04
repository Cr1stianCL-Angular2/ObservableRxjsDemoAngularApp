import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../models/Comments';
import { Observable } from 'rxjs';
import { Photos } from '../models/Photos';

@Injectable({
	providedIn: 'root'
})
export class JsonPlaceHolderService {
	constructor(private http: HttpClient) {}

	obtieneComentarios(): Observable<Comments> {
		return this.http.get<Comments>('https://jsonplaceholder.typicode.com/comments');
	}

	obtieneFotos(): Observable<Photos> {
		return this.http.get<Photos>('https://jsonplaceholder.typicode.com/photos');
	}
}
