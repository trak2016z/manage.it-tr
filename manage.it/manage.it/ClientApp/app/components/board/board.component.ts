import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {UtilityService} from "../../services/utility.service";
import {ProjectService, Board} from "../../services/project.service";

@Component({
    selector: 'board',
    template: require('./board.component.html'),
    styles: [require('./board.component.css')],
    providers: [UtilityService]
})
export class BoardComponent implements OnInit{
    private projectService: ProjectService;
    private accountService: AccountService;
    private utilityService: UtilityService;
    private boards: Array<Board>;

    constructor(accountService: AccountService, utilityService: UtilityService, projectService: ProjectService){
        this.accountService = accountService;
        this.utilityService = utilityService;
        this.projectService = projectService;
    }

    ngOnInit(): void {
        this.accountService.checkIfUserIsAuthenticated();
        this.projectService.getProjectsForUser().subscribe(result => {
            this.boards = result.json();
        }, error => {
            this.utilityService.handleApiError(error);
        });
    }
}

