import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    modelo: '',
    autoria: ''
  }
  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute){}
  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPensamentoPorId(Number(id)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }
  excluirPensamento(){
    this.service.excluir(Number(this.pensamento.id)).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }
  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }
}
