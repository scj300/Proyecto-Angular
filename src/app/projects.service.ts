import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

@Injectable()
export class ProjectsService {
    router: any;

    constructor(private http: HttpClient) {}

    get_projects() {
        return this.http.get('http://localhost:8888/projects');
    }


    add_newsletter(mail: string) {
        return this.http.post('http://localhost:8888/project',
            {
                "mail": mail
            })    .subscribe(
            (val) => {
                window.alert('Suscrito al Newsletter')
                console.log("POST call successful value returned in body",
                    val);
            },
            response => {
                error => window.alert('Ya estas suscrito');
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
    }

    delete_newsletter(mail: string) {
            return this.http.delete('http://localhost:8888/project/' + mail) .subscribe(
                success => {
                    window.alert('Suscripción cancelada');
                    this.router.navigate(['/project'])
                },
                error => {
                    console.log('Error: ' + error.toString());
                    window.alert('No tienes permiso para borrar');
                }
            );
    }

}
