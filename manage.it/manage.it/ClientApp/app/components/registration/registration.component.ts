import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {HttpClient} from "../../services/httpClient.service";

@Component({
    selector: 'registration',
    template: require('./registration.component.html'),
    styles: [require('./registration.component.css')],
    providers: [AccountService, HttpClient]
})
export class RegistrationComponent {
    public registrationForm: FormGroup;
    private accountService: AccountService;

    constructor(formBuilder: FormBuilder, accountService: AccountService){
        this.accountService = accountService;

        this.registrationForm = formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public onSubmit(): void {
         if(!this.registrationForm.valid){
             return;
         }

         this.accountService.createNewAccount("test@test.pl", "1qaz@WSX").subscribe(result => {
             debugger;
         });
    }
}
