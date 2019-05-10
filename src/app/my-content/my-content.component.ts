import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.css']
})

export class MyContentComponent implements OnInit {

    // projects: string[] = [];
    projects: {name: string; language: string; description: string }[] = [];

    constructor(private activatedRoute: ActivatedRoute, private projectsService: ProjectsService) {}

    ngOnInit() {
        this.projectsService.get_projects().subscribe(
            (projects: {name: string; language: string; description: string }[]) => {
                this.projects = projects;
            },
            (error) => {},
            () => {}
        );
    }
}
