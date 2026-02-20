import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageInfo } from '../interfaces/pageinfo.interface';

@Injectable({
  providedIn: 'root',
})
export class Pageinfo {

  info: PageInfo = {};
  loaded = false;
  team: any[] = [];

  constructor(private http: HttpClient) {
    //console.log('Pageinfo service initialized');
    
    // Carga de los ficheros JSON
    this.loadPageInfo();
    this.loadTeam();
  }

  private loadPageInfo() {
    this.http.get('assets/data/page-data.json')
    .subscribe( (resp: PageInfo) => {
      this.loaded = true;
      this.info = resp;
      });
    }

  private loadTeam() {
    this.http.get('https://cursoangularudemy-906b1-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe( (resp: any) => {
      this.team = resp;
      });
    }
  
}
