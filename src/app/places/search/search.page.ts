import { Component } from '@angular/core';

import { Places } from './../places.model';
import { PlacesService } from './../places.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  placeList: Array<Places>;

  constructor(private placeService: PlacesService) {
    this.placeList = [];
  }

  ionViewDidEnter() {
    this.placeList = this.placeService.places;
  }

}
