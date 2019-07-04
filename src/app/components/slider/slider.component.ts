import { Component, OnInit, Input } from '@angular/core';
import { Banner, BannerData } from 'src/app/interfaces/banner';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() banner: BannerData;
  constructor() {
    
  }
  ngOnInit() {
   
  }
  ngDoCheck(): void {
    
  }

}
