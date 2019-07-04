import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { StoreService } from 'src/app/services/store.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public data: DataService,
    public store: StoreService,
    public router:Router
  ) { }

  name: string;
  password: string;
  ngOnInit() {
  }
  login() {
    // console.log(this.name,this.password)
    this.data.login(this.name, this.password).subscribe(
      (res: User) => {
        if (res.err == 0) {
          this.store.bLoading = false;
          alert(res.msg)
          this.store.user = res.data;
          this.router.navigate(['/user'])
        } else {
          alert(res.msg)
        }
      }
    )
  }

}
