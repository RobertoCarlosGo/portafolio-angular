import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from 'c:/Users/CRGAg/Documents/CursoAngular/URKU-Portfolio-Template-HTML5-PIXEDEN-v.1.0.5/portafolio/src/app/interfaces/info-equipo.interface'

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  IPcargada = false;
  IEcargada = false;

  equipo: any[] = []; 

  constructor( private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
   }

   private cargarInfo(){
    console.log('Servicio de InfoPagina listo');

    

    //leer el archivo Json
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPagina ) => {
        
        this.IPcargada = true;
        this.info = resp;
      });   
   }

   private cargarEquipo(){
    console.log('Servicio de equipo listo');

    

    //leer el archivo Json
    this.http.get('https://prueba5-5a121.firebaseio.com/equipo.json')
      .subscribe( (respE:any ) => {
        
        this.equipo = respE;
        //console.log(respE)
      });  
   }
}
