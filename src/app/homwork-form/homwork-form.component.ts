import { Component, OnInit } from '@angular/core';
import { Studies } from '../models/studies';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tarea } from '../models/tarea';

import * as _moment from 'moment';

@Component({
  selector: 'app-homwork-form',
  templateUrl: './homwork-form.component.html',
  styleUrls: ['./homwork-form.component.scss']
})
export class HomworkFormComponent implements OnInit {

  tareasForm: FormGroup;
  estudies: Studies = new Studies();
  tarea: Tarea;

  constructor() {

  }

  ngOnInit() {
    this.initForm();
    this.estudies.studies;
    console.log(this.estudies);
  }

  initForm(): void {
    this.tareasForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'study': new FormControl(null, Validators.required),
      'finalDate': new FormControl(null, Validators.required),
    });
    console.log(this.tareasForm);

  }
  onSubmit() {
    console.log(this.tareasForm);
    const entregaDate = this.tareasForm.get("finalDate").value;
    this.tarea = {
      title: this.tareasForm.get("title").value,
      category: this.tareasForm.get("study").value,
      finalDate: _moment(entregaDate).format('MM/DD/YYYY'),
      actualDate: _moment().format('MM/DD/YYYY'),
      deliverDate: null

    };

    console.log(this.tarea);

  }

}
