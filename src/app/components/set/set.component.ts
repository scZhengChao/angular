import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { logout } from 'src/app/interfaces/logout';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  constructor(
    public data: DataService,
    public router: Router,
    public store:StoreService
  ) { }

  ngOnInit() {
  }
  logout() {
    
    this.data.logout().subscribe(
      (res:logout) => {
        this.store.bLoading = false;
        this.store.user = null;
        if (res.err == 0) {
          alert(res.msg)
          this.router.navigate(['/login'])
        }
      }
    )
  }
}
