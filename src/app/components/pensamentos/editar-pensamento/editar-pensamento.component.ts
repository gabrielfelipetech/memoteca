import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent {
  pensamento: Pensamento = {
    modelo: '',
    autoria: '',
    id: 0,
    conteudo: '',
  }
  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute){}
  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }
  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPensamentoPorId(Number(id)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }
}
