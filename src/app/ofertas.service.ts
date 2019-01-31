import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reject } from 'q';


//import { reject } from 'q';
//import { resolve } from 'dns';

@Injectable()
export class OfertasService {

  constructor(private http: HttpClient) {
  }
  public getOfertas() {//: Promise<Oferta[]> {

    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/ofertas?destaque=true').subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error)
      });
    })//efetuar uma requisição http
    //return this.http.get('http://localhost:3000/ofertas')
    //  .toPromise()
    //.then((resposta: any) => resposta.json)
    //retomar um promise Oferta[]
  }
  public getOfertasPorCategoria(categoria: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`).subscribe((result) => {
        resolve(result);
        console.log(result)
      }, (error) => {
        reject(error)
      });
    })
  }
  public getPerguntas(){
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/perguntas').subscribe((result) =>{
        resolve(result);
      }, (error) => { 
        reject(error)
      });
    })
  }
}