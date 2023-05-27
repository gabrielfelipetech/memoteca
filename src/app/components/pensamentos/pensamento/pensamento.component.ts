import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento:Pensamento = {
    id: 0,
    autoria : '',
    modelo: '',
    conteudo: ''
  }
  larguraPensamento(conteudo:string):string{
    if(conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
