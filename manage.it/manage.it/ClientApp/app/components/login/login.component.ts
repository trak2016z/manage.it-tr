import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {UtilityService} from "../../services/utility.service";

@Component({
    selector: 'login',
    template: require('./login.component.html'),
    styles: [require('./login.component.css')],
    providers: [UtilityService]
})
export class LoginComponent {
    private loginForm: FormGroup;
    private accountService: AccountService;
    private utilityService: UtilityService;

    constructor(formBuilder: FormBuilder, accountService: AccountService, utilityService: UtilityService){
        this.accountService = accountService;
        this.utilityService = utilityService;

        this.loginForm = formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public onSubmit(): void {
        if(!this.loginForm.valid){
            return;
        }

        this.accountService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(result => {
            this.accountService.getAndUpdateAntiForgeryToken();
            this.accountService.isUserSignedIn();
        }, error => {
            this.utilityService.handleApiError(error);
        });
    }
}
