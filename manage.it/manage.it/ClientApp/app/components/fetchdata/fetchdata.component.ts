import { Component } from '@angular/core';
import {HttpClient} from "../../services/httpClient.service";

@Component({
    selector: 'fetchdata',
    template: require('./fetchdata.component.html'),
    providers: [HttpClient]
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];

    constructor(httpClient: HttpClient) {
        httpClient.get('/api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json();
        });
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
