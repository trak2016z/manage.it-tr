import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {UtilityService} from "../../services/utility.service";

@Component({
    selector: 'registration',
    template: require('./registration.component.html'),
    styles: [require('./registration.component.css')],
    providers: [UtilityService]
})
export class RegistrationComponent {
    private registrationForm: FormGroup;
    private accountService: AccountService;
    private utilityService: UtilityService;

    constructor(formBuilder: FormBuilder, accountService: AccountService, utilityService: UtilityService){
        this.accountService = accountService;
        this.utilityService = utilityService;

        this.registrationForm = formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public onSubmit(): void {
         if(!this.registrationForm.valid){
             return;
         }

         this.accountService.createNewAccount(this.registrationForm.value.email, this.registrationForm.value.password).subscribe(result => {
             alert('Konto zostało pomyślnie utworzone. Możesz się teraz zalogować.')
         }, error => {
             this.utilityService.handleApiError(error);
         });
    }
}
