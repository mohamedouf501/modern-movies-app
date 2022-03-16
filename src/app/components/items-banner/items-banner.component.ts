import { Movie } from './../../models/movie';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent  {
  @Input() items: Movie[]=[]; 
  @Input() title: string=''; 

  
 
}
