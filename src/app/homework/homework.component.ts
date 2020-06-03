import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  @Input() tarea: Tarea;

  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
