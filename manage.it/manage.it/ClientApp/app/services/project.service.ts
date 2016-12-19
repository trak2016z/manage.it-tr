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

    createNewTask(name: string, description: string, projectId) : Observable<Response> {
        return this.httpClient.post('/api/Board/CreateNewTask', {
            name: name,
            description: description,
            projectId: projectId
        });
    }

    getProjectsForUser(): Observable<Response> {
        return this.httpClient.get('/api/Board/GetProjectsForUser');
    }

    getProject(projectId: number): Observable<Response> {
        return this.httpClient.get('/api/Board/GetProject/' + projectId)
    }
}

export class Board {
    id: number;
    name: string;
    description: string;
    columns: Array<Column>;
    userBoards: any;
}

export class Column {
    id: number;
    name: string;
    sequence: number;
    tasks: Array<Task>;
    boardId: number;
    board: Board;
}

export class Task {
    id: number;
    name: string;
    description: string;
    sequence: number;
    userId: string;
    user: any;
    columnId: number;
    column: Column;
}
