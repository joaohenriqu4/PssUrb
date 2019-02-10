import { Component, OnInit } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';
//import { OrdemCompraService } from '../ordem-compra.service'
//import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  // providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  //controles de validação dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  //controles de validação dos campos
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;


  // constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    //console.log(this.endereco)

    this.enderecoEstadoPrimitivo = false;

    //se a string for maior que 3
    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    //console.log(this.numero);

    this.numeroEstadoPrimitivo = false;

    //se O numero for maior que 1
    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    //console.log(this.complemento);

    this.complementoEstadoPrimitivo = false;

    //se a string for maior que 1
    if (this.complemento.length > 0) {
      this.complementoValido = true;
    } else {
      this.complementoValido = false;
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    //console.log(this.formaPagamento);

    this.formaPagamentoEstadoPrimitivo = false;
    
    //se a string for maior que 3
    if (this.formaPagamento === "dinheiro" || this.formaPagamento === 'debito') {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }


}
