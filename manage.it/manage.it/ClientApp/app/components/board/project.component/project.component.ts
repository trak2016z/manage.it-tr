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
    private $: any;

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
        this.$ = require('jQuery');
    }

    ngOnInit(): void {
        this.accountService.checkIfUserIsAuthenticated();
        this.projectId = +this.route.params['value'].id;
        this.newTaskForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });

        this.getProject();
    }

    getProject(){
        this.projectService.getProject(this.projectId).subscribe(result => {
            this.board = result.json();
        }, error => {
            this.utilityService.handleApiError(error);
        });
    }

    hideDialog(): void {
        //todo - change it to use .modal('hide') function
        this.$('button.close').trigger('click');
    }

    createNewTask(): void {
        this.projectService.createNewTask(this.newTaskForm.value.name, this.newTaskForm.value.description, this.projectId).subscribe(result => {
            this.getProject();
            this.newTaskForm.reset();
            this.hideDialog();
        }, error => {
            this.utilityService.handleApiError(error);
        });
    }
}


