import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { StoreService } from '../services/store.service';
import { userInfo } from 'os';
import { DataService } from '../services/data.service';
import { User, UserData } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(
    public store: StoreService,
    public router: Router,
    public data: DataService,
    public http:HttpClient
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Boolean | Promise<boolean> {
    //同步的路由守卫
    // if (this.store.user == undefined) {
    //   this.router.navigate(['/login'])
    // } else {
    //   return true
    // }

    //一步守卫 返回 promise<boolean>
    return fetch(
      'http://localhost:3000/user',
      {
        credentials:'include'
      }
    ).then(
      res=>res.json()
    ).then(
      data => {
        // console.log(data)
        if (data.err == 0) {
          this.store.user = data.data;
          return true
        } else {
          this.router.navigate(['/login'])
        }
      }
    )
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    
      return true;
  }
  
 
}
