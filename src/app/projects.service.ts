import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

@Injectable()
export class ProjectsService {

    constructor(private http: HttpClient) {}

    get_projects() {
        return this.http.get('http://localhost:8888/projects');
    }

}
