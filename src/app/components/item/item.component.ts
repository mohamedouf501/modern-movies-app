import { Movie } from './../../models/movie';
import { Component, OnInit, Input } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class MovieItemComponent implements OnInit {
  
  @Input() itemData: Movie | null= null; 
  imagesSizes = IMAGES_SIZES;

  

  ngOnInit(): void {
  }

}
