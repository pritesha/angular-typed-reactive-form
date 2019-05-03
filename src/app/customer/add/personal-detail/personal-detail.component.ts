import { Component, Input } from '@angular/core';
import { FormBuilderTypeSafe, FormGroupTypeSafe } from 'src/app/shared/typed-form';
import { PersonalDetail } from 'src/app/models/personal-detail';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-personal-detail',
    templateUrl: 'personal-detail.component.html'
})
export class PersonalDetailComponent {

    @Input() personalDetailForm: FormGroupTypeSafe<PersonalDetail>;

    get givenName() {
        return this.personalDetailForm.getSafe(x => x.givenName);
    }

    get familyName() {
        return this.personalDetailForm.getSafe(x => x.familyName);
    }

    get dateOfBirth() {
        return this.personalDetailForm.getSafe(x => x.dateOfBirth);
    }

    get gender() {
        return this.personalDetailForm.getSafe(x => x.gender);
    }

    static buildDefaultControls(fb: FormBuilderTypeSafe): FormGroupTypeSafe<PersonalDetail> {
        return fb.group<PersonalDetail>({
            givenName: new FormControl(null, Validators.required),
            familyName: new FormControl(null, Validators.required),
            dateOfBirth: new FormControl(null, Validators.required),
            gender: new FormControl(null, Validators.required)
        });
    }
}
