import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      name: 'MediaWiki Documentations',
      technologyies: ['MediaWiki', 'MySQL database']
    },
    {
      name: 'ngSpotify',
      technologyies: ['Angular2', 'NodeJs', 'Spotify API']
    },
    {
      name: 'ToDo List',
      technologyies: ['Angular2', 'NodeJs', 'MongoDB']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
