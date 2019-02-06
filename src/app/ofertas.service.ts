import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reject } from 'q';
import { URL_API } from './app.api'

//import { reject } from 'q';
//import { resolve } from 'dns';

@Injectable()
export class OfertasService {


  constructor(private http: HttpClient) {
  }
  public getOfertas() {//: Promise<Oferta[]> {

    return new Promise((resolve, reject) => {
      this.http.get(`${URL_API}ofertas?destaque=true`).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    })//efetuar uma requisição http
    //return this.http.get('http://localhost:3000/ofertas')
    //  .toPromise()
    //.then((resposta: any) => resposta.json)
    //retomar um promise Oferta[]
  }
  //--------------------------//
  public getOfertasPorCategoria(categoria: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`${URL_API}ofertas?categoria=${categoria}`).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    })
  }
  //---------------PROJ BIDWEB---------------//
  public getPerguntas() {
    return new Promise((resolve, reject) => {
      this.http.get(`${URL_API}ofertas`).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }
  //---------------------//
  public getOfertasPorId(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(`${URL_API}ofertas?id=${id}`).subscribe((result) => {
        resolve(result[0]);
      }, (error) => {
        reject(error);
      });
    });
  }
    //---------------------//
  public getComoUsarOfertaPorID(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(`${URL_API}como-usar?id=${id}`).subscribe((result) => {
        resolve(result[0].descricao);
      }, (error) => {
        reject(error);
      });
    });
  }
    //---------------------//
  public getOndeFicaOfertaPorID(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(`${URL_API}onde-fica?id=${id}`).subscribe((result) => {
        resolve(result[0].descricao);
      }, (error) => {
        reject(error);
      });
    });
  }
}