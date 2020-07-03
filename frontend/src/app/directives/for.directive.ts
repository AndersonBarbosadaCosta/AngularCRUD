import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

//diretiva estrutural para adicionar elementos na DOM.
// USAR @Input para mapear o acesso
@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) {

  }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, 
        { $implicit: number });  // valor implicito no contexto do angular armazenando os valores 
    }
    console.log(this.numbers)
  }

}
