import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfoIf } from '../interfaces/pageinfo.interface';

@Injectable({
  providedIn: 'root',
})
export class Pageinfo {

  info: PageInfoIf = {};
  loaded = false;

  constructor(private http: HttpClient) {
    //console.log('Pageinfo service initialized');
    
    // Carga del fichero JSON
    this.http.get('assets/data/page-data.json').subscribe(
      resp => {
        this.loaded = true;
        this.info = resp;
        console.log( resp );
      }
    );
  }
  
}
