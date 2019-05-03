import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/add/customer.component';
import { PersonalDetailComponent } from './customer/add/personal-detail/personal-detail.component';
import { ContactDetailComponent } from './customer/add/contact-detail/contact-detail.component';
import { GenderPickerComponent } from './shared/gender-picker/gender-picker.component';
import { FormBuilderTypeSafe } from './shared/typed-form';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    PersonalDetailComponent,
    ContactDetailComponent,
    GenderPickerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  providers: [
    FormBuilderTypeSafe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
