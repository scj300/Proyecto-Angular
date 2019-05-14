import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../projects.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


    constructor(private activatedRoute: ActivatedRoute, private projectsService: ProjectsService) {}

    // tslint:disable-next-line:variable-name
    mail_add: string;
    // tslint:disable-next-line:variable-name
    mail_del: string;


    ngOnInit() {
    }

    on_click(mail: string) {
        this.mail_add = mail;
        this.projectsService.add_newsletter(mail);
    }

    on_click_delete(mail: string) {
        this.mail_del = mail;
        this.projectsService.delete_newsletter(mail);
    }

}
