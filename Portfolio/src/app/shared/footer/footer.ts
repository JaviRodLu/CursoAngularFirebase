import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Pageinfo } from '../../services/pageinfo';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  constructor(public _service: Pageinfo) {}
  anio: number = new Date().getFullYear();
}
