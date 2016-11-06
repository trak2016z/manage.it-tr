import { Component } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {UtilityService} from "../../services/utility.service";

@Component({
    selector: 'board',
    template: require('./board.component.html'),
    styles: [require('./board.component.css')],
    providers: [UtilityService]
})
export class BoardComponent {
    private accountService: AccountService;
    private utilityService: UtilityService;

    constructor(accountService: AccountService, utilityService: UtilityService){
        this.accountService = accountService;
        this.utilityService = utilityService;

        this.accountService.checkIfUserIsAuthenticated();
    }

    createNewProject(){

    }
}

