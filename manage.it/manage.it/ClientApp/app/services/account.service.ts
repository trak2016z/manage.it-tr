import {Injectable, Inject} from '@angular/core';
import { Response} from "@angular/http";
import {Observable} from "rxjs";
import {HttpClient} from "./httpClient.service";

@Injectable()
export class AccountService {
    private httpClient: HttpClient;
    public userViewModel: UserViewModel;

    constructor(@Inject(HttpClient) httpClient: HttpClient){
        this.httpClient = httpClient;
        this.userViewModel = new UserViewModel();
    }

    checkIfUserIsAuthenticated() {

    }

    updateAntiForgeryTokenAfterLoginOrLogout(response: Response){
        var inputElement = document.createElement('div');
        inputElement.innerHTML = response['_body'];
        var newToken = inputElement.getElementsByTagName('input')['__RequestVerificationToken'].value;

        document.getElementsByName("__RequestVerificationToken")[0]['value'] = newToken;
    }

    createNewAccount(email: string, password: string): Observable<Response> {
        var requestModel = {
            email: email,
            password: password,
            confirmPassword: password
        };

        return this.httpClient.post('/api/Account/Register', requestModel);
    }

    login(email: string, password: string): Observable<Response> {
        var requestModel = {
            email: email,
            password: password,
        };

        return this.httpClient.post('/api/Account/Login', requestModel);
    }

    isUserSignedIn(): void {
        this.httpClient.get('/api/Account/IsUserSignedIn')
            .subscribe(data => {
                let dataJson = data.json();
                this.userViewModel.isSignedIn = dataJson.isSignedIn;
                this.userViewModel.userName = dataJson.name;
            });
    }

    getAndUpdateAntiForgeryToken(): void {
        this.httpClient.get('/api/Account/AntiForgeryToken')
            .subscribe(response => {
                this.updateAntiForgeryTokenAfterLoginOrLogout(response);
            });
    }

    logOff(): Observable<Response> {
        return this.httpClient.post('/api/Account/LogOff', {});
    }
}

export class UserViewModel {
    isSignedIn: boolean;
    userName: string;

    constructor(){
        this.isSignedIn = false;
        this.userName = "";
    }
}



