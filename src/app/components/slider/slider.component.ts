import { Movie } from './../../models/movie';
import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations:[
    trigger('slidefade' , [
      state('void',style({opacity:0})),
      transition('void <=>*' ,[animate('1s')]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() itmes: Movie[]=[]; 
  @Input() isBanner:boolean=false
  currentSlideIndex :number = 0 ;
  constructor() { }

  ngOnInit(): void {
    if(!this.isBanner)
    {
      setInterval(()=>{
        console.log(1)
        this.currentSlideIndex = ++this.currentSlideIndex % this.itmes.length
      },2000)
    }
    
  }

}
