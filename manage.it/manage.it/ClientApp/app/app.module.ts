import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {RegistrationComponent} from "./components/registration/registration.component";
import { ReactiveFormsModule } from '@angular/forms';
import {LoginComponent} from "./components/login/login.component";
import {BoardComponent} from "./components/board/board.component";
import {AccountService} from "./services/account.service";
import {HttpClient} from "./services/httpClient.service";
import {UtilityService} from "./services/utility.service";
import {NewProjectComponent} from "./components/board/new-project.component/new-project.component";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        RegistrationComponent,
        LoginComponent,
        BoardComponent,
        NewProjectComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'registration', component: RegistrationComponent },
            { path: 'login', component: LoginComponent },
            { path: 'board', component: BoardComponent },
            { path: 'board/new-project', component: NewProjectComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        ReactiveFormsModule
    ],
    providers: [HttpClient, AccountService, UtilityService]
})
export class AppModule {

    constructor(private accountService: AccountService){
        accountService.isUserSignedIn();
    }
}
