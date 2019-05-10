import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ProjectsService} from './projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Empezando con  Angular';

    ngOnInit(): void {
    }


}


