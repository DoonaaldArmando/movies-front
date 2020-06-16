import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.sass'],
})
export class AddFormComponent implements OnInit {
  constructor() {}
  name = new FormControl('');
  ngOnInit(): void {}
}
