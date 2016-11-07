import { Component } from '@angular/core';
import {UtilityService} from "../../../services/utility.service";
import {AccountService} from "../../../services/account.service";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";
import {ProjectService} from "../../../services/project.service";
import {Router} from "@angular/router";

@Component({
    selector: 'new-project',
    template: require('./new-project.component.html'),
    styles: [require('./new-project.component.css')],
    providers: [UtilityService, ProjectService]
})
export class NewProjectComponent {
    private accountService: AccountService;
    private utilityService: UtilityService;
    private projectService: ProjectService;
    private newProjectForm: FormGroup;
    private router: Router;

    constructor(accountService: AccountService, utilityService: UtilityService, formBuilder: FormBuilder, projectService: ProjectService, router: Router){
        this.accountService = accountService;
        this.utilityService = utilityService;
        this.projectService = projectService;
        this.router = router;

        this.accountService.checkIfUserIsAuthenticated();

        this.newProjectForm = formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    onSubmit() {
        this.projectService.createNewProject(this.newProjectForm.value.name, this.newProjectForm.value.description).subscribe(result => {
            alert('Nowy projekt został utworzony.');
            this.router.navigate(['/board']);
        }, error => {
            this.utilityService.handleApiError(error);
        });
    }
}

