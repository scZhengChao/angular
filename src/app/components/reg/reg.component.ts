import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { StoreService } from 'src/app/services/store.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(
    public data: DataService,
    public store:StoreService
  ) { }

  ngOnInit() {
  }
  name: string;
  password: string;

  reg(name,password) {
    this.data.reg(name, password).subscribe(
      (res: User) => {
        console.log(res)
        this.store.bLoading = false;
      }
    )
  }

}
