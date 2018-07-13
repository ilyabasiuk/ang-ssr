import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <a routerLink="/" class="navbar-brandt">
        <img [attr.src]="logo" [attr.alt]="title" width="30" height="30">
        {{ title }}
      </a>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
        </div>
      </div> 
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  public logo = 'assets/logo.svg';
  public title = 'Store';
  public links = [{
    label: "products",
    ulr: "/products"
  }];

  constructor() { }

  ngOnInit() {
  }

}
