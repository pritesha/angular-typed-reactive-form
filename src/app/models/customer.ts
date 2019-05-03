import { PersonalDetail } from './personal-detail';
import { ContactDetail } from './contact-detail';

export interface Customer {
    id: number;
    personalDetails: PersonalDetail;
    contactDetails: ContactDetail;
}
