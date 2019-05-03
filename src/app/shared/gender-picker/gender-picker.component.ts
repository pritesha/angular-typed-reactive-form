import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { genders } from 'src/app/models/gender';

@Component({
    selector: 'app-gender-picker',
    templateUrl: 'gender-picker.component.html'
})
export class  GenderPickerComponent {
    @Input() gender: FormControl;

    readonly genders = genders;
}
