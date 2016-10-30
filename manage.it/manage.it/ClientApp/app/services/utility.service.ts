import {Injectable} from '@angular/core';

@Injectable()
export class UtilityService {
    constructor(){

    }

    handleApiError(error: any): void {
        alert(error._body);
    }
}