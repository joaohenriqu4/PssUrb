import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Pergunta } from '../shared/pergunta.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [OfertasService]
})
export class FormComponent implements OnInit {

  public perguntas: Pergunta[]

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertasService.getPerguntas()
    .then((pergunta: Pergunta[]) =>{
      this.perguntas = pergunta
      console.log(pergunta)
    })
    .catch((param: any) =>{
    })
  }

}
