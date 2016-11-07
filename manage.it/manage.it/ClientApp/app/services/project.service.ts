import {Injectable, Inject} from '@angular/core';
import { Response} from "@angular/http";
import {Observable} from "rxjs";
import {HttpClient} from "./httpClient.service";

@Injectable()
export class ProjectService {
    private httpClient: HttpClient;

    constructor(@Inject(HttpClient) httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    createNewProject(name: string, description: string): Observable<Response> {
        return this.httpClient.post('/api/Board/CreateNewBoard', {
            name: name,
            description: description
        });
    }
}
