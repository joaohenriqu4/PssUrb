import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Pergunta } from '../shared/pergunta.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [OfertasService]
})
export class FormComponent implements OnInit {

  public perguntas: Pergunta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertasService.getPerguntas()
    .then((perguntas: Pergunta[]) =>{
      this.perguntas = perguntas
    })
    .catch((param: any) =>{
    })
  }

}
