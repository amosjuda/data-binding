import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: String = 'https://www.linkedin.com/in/am%C3%B3s-jud%C3%A1-4b5500229/';
  cursoAngular: boolean = true;
  urlImagem = 'https://i.pinimg.com/564x/14/8b/b1/148bb15d13eb8fa4266ea3174ec56ed0.jpg'

  valorAtual: String = '';
  valorSalvo: String = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  nome: string = 'abc';
  pessoa: any={
    nome:'Amos',
    idade : 21,
  }
valorInicial: number | undefined;
onMudouValor: any;

  getValor(){
    return 3;
  }
  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }
  
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor(){

  }
  ngOnInit(){

  }
  
}
