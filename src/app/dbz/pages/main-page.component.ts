import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor(public dbzService:DbzService){

  }
}
