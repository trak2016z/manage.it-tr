import { Component, OnInit } from '@angular/core';
import {UtilityService} from "../../../services/utility.service";
import {AccountService} from "../../../services/account.service";
import {ProjectService, Board} from "../../../services/project.service";
import {Router, ActivatedRoute} from "@angular/router";

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

    constructor(accountService: AccountService, utilityService: UtilityService, projectService: ProjectService, router: Router, route: ActivatedRoute){
        this.accountService = accountService;
        this.utilityService = utilityService;
        this.projectService = projectService;
        this.router = router;
        this.route = route;
    }

    ngOnInit(): void {
        this.accountService.checkIfUserIsAuthenticated();
        var projectId = +this.route.params['value'].id;
        this.projectService.getProject(projectId).subscribe(result => {
            this.board = result.json();
        }, error => {
            this.utilityService.handleApiError(error);
        });
    }
}


