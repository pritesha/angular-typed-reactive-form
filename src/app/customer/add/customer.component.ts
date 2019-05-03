import { Component, OnInit } from '@angular/core';
import { FormGroupTypeSafe, FormBuilderTypeSafe } from 'src/app/shared/typed-form';
import { Customer } from 'src/app/models/customer';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-customer',
    templateUrl: 'customer.component.html'
})
export class CustomerComponent implements OnInit {

    customerForm: FormGroupTypeSafe<Customer>;

    get personalDetailForm() {
        return this.customerForm.getSafe(x => x.personalDetails);
    }

    get contactDetailForm() {
        return this.customerForm.getSafe(x => x.contactDetails);
    }

    constructor(
        readonly fb: FormBuilderTypeSafe
    ) {}

    ngOnInit(): void {
        const personalDetail = PersonalDetailComponent.buildDefaultControls(this.fb);
        const contactDetails = ContactDetailComponent.buildDefaultControls(this.fb);

        this.customerForm = this.fb.group<Customer>({
            id: new FormControl(0, Validators.required),
            personalDetails: personalDetail,
            contactDetails: contactDetails
        });

        // In case of edit , below code can be used to patch value from service
        // this.customerSerivce.getById(this.customerId)
        //     .subscribe(customer => {
        //       this.cusstomerForm.patchValue(customer);
        //     });
    }

    submit() {
        console.log(JSON.stringify(this.customerForm.value));
    }

}
