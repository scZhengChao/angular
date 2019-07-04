import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public store: StoreService,
    public data:DataService
  ) { 
    data.getBanner()
    data.getdujia()
    data.getnews()
  }

  ngOnInit() {
    
  }

}
