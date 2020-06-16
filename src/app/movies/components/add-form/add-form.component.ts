import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movie } from 'src/app/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.sass'],
})
export class AddFormComponent {
  constructor(private fb: FormBuilder) {}

  @Output() movieFormEvent: EventEmitter<Movie> = new EventEmitter();

  movieForm = this.fb.group({
    title: ['', Validators.required],
    releaseDate: ['', Validators.required],
    description: ['', Validators.required],
  });

  onSubmit() {
    this.movieFormEvent.emit(this.movieForm.value);
  }
}
