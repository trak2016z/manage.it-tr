import { Component, OnInit } from '@angular/core';
import {UtilityService} from "../../../services/utility.service";
import {AccountService} from "../../../services/account.service";
import {ProjectService, Board} from "../../../services/project.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'project',
    template: require('./project.component.html'),
    styles: [require('./project.component.css')],
    providers: [UtilityService, ProjectService]
})
export class ProjectComponent implements OnInit{
    private accountService: AccountService;
    private utilityService: UtilityService;
    private projectService: ProjectService;
    private router: Router;
    private route: ActivatedRoute;
    private board: Board;
    private newTaskForm: FormGroup;
    private formBuilder: FormBuilder;
    private projectId: number;

    constructor(accountService: AccountService,
                utilityService: UtilityService,
                projectService: ProjectService,
                router: Router,
                route: ActivatedRoute,
                formBuilder: FormBuilder,){
        this.accountService = accountService;
        this.utilityService = utilityService;
        this.projectService = projectService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
    }

    ngOnInit(): void {
        this.accountService.checkIfUserIsAuthenticated();
        this.projectId = +this.route.params['value'].id;

        this.projectService.getProject(this.projectId).subscribe(result => {
            this.board = result.json();
        }, error => {
            this.utilityService.handleApiError(error);
        });

        this.newTaskForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    createNewTask(): void {
        this.projectService.createNewTask(this.newTaskForm.value.name, this.newTaskForm.value.description, this.projectId).subscribe(result => {
            this.newTaskForm.value.name = "";
            this.newTaskForm.value.description = "";
            //$('#mi-new-task-modal').modal('hide');
            alert("Dodano zadanie :)");
        }, error => {
            this.utilityService.handleApiError(error);
        });
    }
}


