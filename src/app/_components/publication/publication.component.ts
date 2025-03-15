import { Component, OnInit } from '@angular/core';
import { Publication } from '../../_model/publication';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit {
  publication: Publication | undefined;
  publicationId: number | undefined;

  publications: Publication[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.publicationId = +this.route.snapshot.paramMap.get('id')!;
    // this.publication = this.dataService.getPublicationById(this.publicationId);
    // if (this.publication === undefined) {
    //   console.log('publicaton not found');
    // } else {
    //   console.log(JSON.stringify(this.publication));
    // }
    this.getPublications();
  }

  getPublications() {
    this.publications = this.dataService.getAllPublications();
    console.log(JSON.stringify(this.publications));
  }
}
