import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//import { reject } from 'q';
//import { resolve } from 'dns';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {
    }
    public getOfertas(): Observable<Oferta[]> {
        //efetuar uma requisição http
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta.json)
        //retomar um promise Oferta[]
    }
}