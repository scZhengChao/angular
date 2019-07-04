import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(
    public store: StoreService,
    public data: DataService
  ) { }

  ngOnInit() {
  }
  add(id:string) {
    this.data.add(id)
  }
  sub(id:string) {
   this.data.sub(id)
  }
  remove(id:string) {
   this.data.remove(id)
  }
  clear() {
   this.data.clear()
  }

}
