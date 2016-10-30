import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class HttpClient {
    constructor(private http: Http) {
        this.http = http;
    }

    createAntiForgeryTokenHeader(headers: Headers) {
        var antiForgeryToken = document.getElementsByName("__RequestVerificationToken")[0]['value'];
        headers.append('RequestVerificationToken', antiForgeryToken);
    }

    get(url) {
        return this.http.get(url);
    }

    post(url, data) {
        let headers = new Headers();
        this.createAntiForgeryTokenHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }
}