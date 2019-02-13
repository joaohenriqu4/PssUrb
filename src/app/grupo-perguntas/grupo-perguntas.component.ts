import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-grupo-perguntas',
  templateUrl: './grupo-perguntas.component.html',
  styleUrls: ['./grupo-perguntas.component.css'],
  providers: [OfertasService]
})
export class GrupoPerguntasComponent implements OnInit {

  public grupoPerguntas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertasService.getGrupoPerguntas()
      .then((grupoPerguntas: Oferta[]) => {
        this.grupoPerguntas = grupoPerguntas
      })
      .catch((param: any) => {
      })
  }
}