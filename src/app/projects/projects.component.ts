import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectFilter = document.getElementsByClassName('list');
  projectsList = document.getElementsByClassName('project-box');
  dataFilter: String = 'app';

  constructor() {}
  ngOnInit(): void {
    this.ProjectListSelector();
    this.ProjectFilterSelector();
  }

  ProjectFilterSelector(): void {
    for (let i = 0; i < this.projectFilter.length; i++) {
      this.projectFilter[i].addEventListener('click', () => {
        if (document.getElementById('project-filter-active') != null) {
          document
            .getElementById('project-filter-active')
            .removeAttribute('id');
        }
        this.projectFilter[i].id = 'project-filter-active';
        this.dataFilter = this.projectFilter[i].getAttribute('data-filter');
        this.ProjectListSelector();
      });
    }
  }

  ProjectListSelector(): void {
    for (let i = 0; i < this.projectsList.length; i++) {
      const className = this.projectsList[i].getAttribute('class');
      const splitString: String[] = className.split(' ');
      const filter = splitString
        .filter((element) => {
          return element != 'project-box';
        })
        .toString();
      if (filter != this.dataFilter) {
        this.projectsList[i].setAttribute('style', 'display: none');
      } else {
        this.projectsList[i].setAttribute('style', 'display: inline');
      }
    }
  }

  bitFilAClick(): void {
    window.open('https://github.com/jemin19/Bit-fil-a');
  }

  openPostIt(): void {
    window.open('https://github.com/sidharthpatel/post-it-frontend#readme');
  }
  openFilters(): void {
    window.open(
      'https://github.com/sidharthpatel/Computer-Vision/tree/main/P1_convolution_fft_resizing'
    );
  }
  openBlob(): void {
    window.open(
      'https://github.com/sidharthpatel/Computer-Vision/tree/main/P2_features_scale_warping'
    );
  }
  openMatchingPipeline(): void {
    window.open(
      'https://github.com/sidharthpatel/Computer-Vision/tree/main/P3_transformations_matching_pipeline'
    );
  }
}
