import { Component } from '@angular/core';
import {UtilityService} from "../../../services/utility.service";
import {AccountService} from "../../../services/account.service";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";

@Component({
    selector: 'new-project',
    template: require('./new-project.component.html'),
    styles: [require('./new-project.component.css')],
    providers: [UtilityService]
})
export class NewProjectComponent {
    private accountService: AccountService;
    private utilityService: UtilityService;
    private newProjectForm: FormGroup;

    constructor(accountService: AccountService, utilityService: UtilityService, formBuilder: FormBuilder){
        this.accountService = accountService;
        this.utilityService = utilityService;

        this.accountService.checkIfUserIsAuthenticated();

        this.newProjectForm = formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    onSubmit() {

    }
}

