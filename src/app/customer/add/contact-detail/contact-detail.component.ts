import { Component, Input } from '@angular/core';
import { FormGroupTypeSafe, FormBuilderTypeSafe } from 'src/app/shared/typed-form';
import { ContactDetail } from 'src/app/models/contact-detail';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-detail',
    templateUrl: 'contact-detail.component.html'
})
export class ContactDetailComponent {

    @Input() contactDetailForm: FormGroupTypeSafe<ContactDetail>;

    get email() {
        return this.contactDetailForm.getSafe(x => x.email);
    }

    get phone() {
        return this.contactDetailForm.getSafe(x => x.phone);
    }

    get addressLine1() {
        return this.contactDetailForm.getSafe(x => x.addressLine1);
    }

    get addressLine2() {
        return this.contactDetailForm.getSafe(x => x.addressLine2);
    }

    get postcode() {
        return this.contactDetailForm.getSafe(x => x.postcode);
    }

    get city() {
        return this.contactDetailForm.getSafe(x => x.city);
    }

    get state() {
        return this.contactDetailForm.getSafe(x => x.state);
    }

    get country() {
        return this.contactDetailForm.getSafe( x => x.country);
    }

    static buildDefaultControls(fb: FormBuilderTypeSafe): FormGroupTypeSafe<ContactDetail> {
        return fb.group<ContactDetail>({
            email: new FormControl(null, Validators.email),
            phone: new FormControl(null, Validators.required),
            addressLine1: new FormControl(null, Validators.required),
            addressLine2: new FormControl(null),
            postcode: new FormControl(null, Validators.required),
            city: new FormControl(null, Validators.required),
            state: new FormControl(null, Validators.required),
            country: new FormControl(null, Validators.required)
        });
    }
}
