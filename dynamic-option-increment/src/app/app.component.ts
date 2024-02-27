import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'options';

  public pollForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.pollForm = this._fb.group({
      question: this._fb.control(''),
      option: this._fb.array([this.addPollGroup()]),

    });
  }

  //Append Fields Set
  private addPollGroup(): FormGroup {
    return this._fb.group({
      question: String,
      choice: [],
    });
  }

  //Add Fields
  addOption(): void {
    this.optionArray.push(this.addPollGroup());
  }

  //Remove Fields
  removeOption(index: number): void {
    this.optionArray.removeAt(index);
  }
  //Fields Array
  get optionArray(): FormArray {
    return <FormArray>this.pollForm.get('option');
  }
  
}
