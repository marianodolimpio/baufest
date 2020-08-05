import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppSettings} from '../appSetting';

@Injectable({
  providedIn: 'root'
})
export class LoguinService {

  urlServer: string = AppSettings.API_URL;

  constructor(private _http: HttpClient) { }


  // Registro de usuario
  // Se llama al servicio registrarUsuario
  
  registrarUsuario(nombre: any, edad: any, telefono: any, email: any, patente: any, modelo: any, anio: any) {
   
    const obj = {
      nombre: nombre,
      edad: edad,
      telefono: telefono,
      email: email,
      patente: patente,
      modelo: modelo,
      anio: anio
      };

      console.log(obj);
      return this._http.post(`${this.urlServer}/registrarUsuario`, obj);
  }


}
