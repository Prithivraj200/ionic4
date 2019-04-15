import { Injectable } from '@angular/core';

import { Places } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Array<Places>;

  constructor() {
    this._places = [
      {
        id: 1,
        title: 'US',
        description: 'Trump country',
        imgUrl: `https://i2.cdn.turner.com/money/2010/06/22/real_estate/fastest_growing_metro_areas/dallas_tx.top.jpg`,
        price: 12
      },
      {
        id: 2,
        title: 'UK',
        description: 'Dream country',
        imgUrl: `https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/08/30/12/belfast.jpg?w968`,
        price: 18
      },
      {
        id: 3,
        title: 'SWISS',
        description: 'Life country',
        imgUrl: `https://lonelyplanetwp.imgix.net/2013/09/RS-shutterstock_535685914-f4184db8625d.jpg?fit=min&q=40&sharp=10&vib=20&w=1470`,
        price: 22
      }
    ];
  }

  get places() {
    return [...this._places];
  }
}
