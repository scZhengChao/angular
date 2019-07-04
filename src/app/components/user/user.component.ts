import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    public data: DataService,
    public route: ActivatedRoute,
    public store:StoreService
  ) {
    // route.data.subscribe(   //订阅数据预载的东西
    //   (res: User) => {
    //     console.log(res)
    //   }
    // )
   }
   
  ngOnInit() {
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.store.user)
  }

}
