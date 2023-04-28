import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Producto} from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos() {

    return new Promise<void>((resolve, reject) => {
      this.http.get('https://prueba5-5a121.firebaseio.com/productos_idx.json')
      .subscribe((resp: any) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });  
    });
    
  }

  getProducto(id:string) {
    return this.http.get(`https://prueba5-5a121.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino:string) {

    if(this.productos.length == 0) {  
      //cargar productos
      this.cargarProductos().then((productos) => {
        //despues de tener los productos
        //aplicar el filtro
        this.filtrarProductos(termino);
      });

    }else {
      //aplicar el filtro
      this.filtrarProductos(termino);
    }

    // this.productosFiltrado = this.productos.filter(producto => {
    //   return true;
    // });
    // console.log(this.productosFiltrado);
  }

  private filtrarProductos(termino:string) {
    console.log(this.productos);
    termino = termino.toLocaleLowerCase();
    this.productosFiltrado = [];
    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino)==0 || tituloLower.indexOf(termino)>=0){
        this.productosFiltrado.push(prod);
      }
    });
  }
}
