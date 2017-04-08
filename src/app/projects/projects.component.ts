import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  host = 'http://' + window.location.hostname;

  mediawiki = {
    name: 'mediawiki',
    link: 'https://www.mediawiki.org/wiki/MediaWiki'
  };

  nodejs = {
    name: 'NodeJs',
    link: 'https://www.mediawiki.org/wiki/MediaWiki'
  };

  Angular2 = {
    name: 'Angular2',
    link: 'https://www.mediawiki.org/wiki/MediaWiki'
  };

  MongoDB = {
    name: 'MongoDB',
    link: 'https://www.mediawiki.org/wiki/MediaWiki'
  };

  SpotifyAPI = {
    name: 'Spotify API',
    link: 'https://www.mediawiki.org/wiki/MediaWiki'
  };

  MySQL = {
    name: 'MySQL database',
    link: 'https://www.mediawiki.org/wiki/MediaWiki'
  };

  projects = [
     {
      name: 'This Page',
      technologyies: [this.Angular2, this.nodejs],
      link: null,
      git: 'https://github.com/piry1/main_rasp_page',
      wiki: null
    },
    {
      name: 'MediaWiki Documentations',
      technologyies: [this.mediawiki, this.MySQL],
      link: '/mediawiki',
      git: null,
      wiki: null
    },
    {
      name: 'ngSpotify',
      technologyies: [this.Angular2, this.nodejs, this.SpotifyAPI],
      link: ':3000',
      git: 'test',
      wiki: null
    },
    {
      name: 'ToDo List',
      technologyies: [this.Angular2, this.nodejs, this.MongoDB],
      link: ':4000',
      git: 'test',
      wiki: 'test'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
