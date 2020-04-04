import { Photos } from './models/Photos';
import { JsonPlaceHolderService } from './services/jsonPlaceHolder.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Comments } from './models/Comments';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	constructor(private JsonService: JsonPlaceHolderService) {}

	listaComentarios: Comments;
	listaFotos: Photos;

	ngOnInit() {
		this.cargaDatos();
	}

	title = 'observableDemo';

	public cargaDatos() {
		const observable = forkJoin({
			comentarios: this.obtieneDatosFromComentarios(),
			fotos: this.obtieneDatosFromFotos()
		});

		observable.subscribe({
			next: (value) => console.log(value),
			complete: () => console.log('This is how it ends!')
		});
	}

	obtieneDatosFromComentarios(): Observable<Comments> {
		const sub = this.JsonService.obtieneComentarios();
		sub.subscribe((resp) => {
			console.log(resp);
			this.listaComentarios = resp;
			console.log('this.listaComentarios', this.listaComentarios);
		});
		return sub;
	}

	obtieneDatosFromFotos(): Observable<Photos> {
		const sub = this.JsonService.obtieneFotos();
		sub.subscribe((resp) => {
			console.log(resp);
			this.listaFotos = resp;
			console.log('this.listaFotos', this.listaFotos);
		});
		return sub;
	}
}
