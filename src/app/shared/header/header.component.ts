import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( public _servicio: InfoPaginaService,
               private router: Router) {

  }

  ngOnInit() {}

  buscarProducto(termino:String) {
    if (termino.length<1){
      return;
    }

    this.router.navigate(['/search',termino]);
  }
}
