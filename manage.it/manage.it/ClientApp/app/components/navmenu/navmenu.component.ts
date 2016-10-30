import { Component } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {UtilityService} from "../../services/utility.service";

@Component({
    selector: 'nav-menu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
})
export class NavMenuComponent {
    constructor(private accountService: AccountService, private utilityService: UtilityService){
        this.accountService = accountService;
        this.utilityService = utilityService;
    }

    logOff(){
        this.accountService.logOff().subscribe(result => {
            this.accountService.getAndUpdateAntiForgeryToken();
            this.accountService.isUserSignedIn();
        }, error => {
            this.utilityService.handleApiError(error);
        });
    }
}
