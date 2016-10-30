import {Injectable, Inject} from '@angular/core';
import { Response} from "@angular/http";
import {Observable} from "rxjs";
import {HttpClient} from "./httpClient.service";

@Injectable()
export class AccountService {
    private httpClient: HttpClient;

    constructor(@Inject(HttpClient) httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    createNewAccount(email: string, password: string): Observable<Response> {
        var requestModel = {
            email: email,
            password: password
        };

        return this.httpClient.post('/api/Account/Login', requestModel);
    }
}