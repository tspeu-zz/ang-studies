import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea';

import * as _moment from 'moment';


@Component({
  selector: 'app-listhomework',
  templateUrl: './listhomework.component.html',
  styleUrls: ['./listhomework.component.scss']
})
export class ListhomeworkComponent implements OnInit {


  tareas: Tarea[];

  constructor() { }

  ngOnInit() {

    this.tareas = [
      {
        title: 'lectura', category: 'matematicas',
        actualDate: _moment().format('MM/DD/YYYY'),
        deliverDate: '01/05/2020',
        finalDate: '05/05/2020'
      },
      {
        title: 'test', category: 'lengua',
        actualDate: _moment().format('MM/DD/YYYY'),
        deliverDate: '29/04/2020',
        finalDate: '30/04/2020'
      },

    ];
  }

}
