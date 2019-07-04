import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { StoreService } from 'src/app/services/store.service';
import { Goodsdata } from 'src/app/interfaces/goods';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent {
  
  constructor(
    public data: DataService,
    public store:StoreService
  ) { 
    data.getgoods()
  }
  goshop(id: string) {
    this.data.car(id) 
  }

}
