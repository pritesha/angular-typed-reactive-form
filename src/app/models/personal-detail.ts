import { Gender } from './gender';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export interface PersonalDetail {
    givenName: string;
    familyName: string;
    gender: Gender;
    dateOfBirth: NgbDate;
}
