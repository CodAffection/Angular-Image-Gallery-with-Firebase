import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styles: []
})
export class ImagesComponent implements OnInit {

  constructor(private service:ImageService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }

}
