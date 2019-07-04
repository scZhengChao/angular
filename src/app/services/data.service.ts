import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StoreService } from './store.service';
import { Banner } from '../interfaces/banner';
import { User, UserData } from '../interfaces/user';
import { News, NewsData } from '../interfaces/news';
import { Goods, Goodsdata } from '../interfaces/goods';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public http: HttpClient,
    public store:StoreService
  ) { }
  get(url: string, params: any = null) {  //总领get,判断参数有没有传,默认null
    this.store.bLoading = true;
    if (params == null) {
      return this.http.get(url)
    } else {
      return this.http.get(url,params)
    }
  }
  getBanner() {
    this.get(
      'http://localhost:3000/banner'
    ).subscribe(
      (res: Banner) => {
        // console.log(res)
        if (res.err == 0) {
          this.store.banner = res.data
          this.store.bLoading = false;
        }
      }
    )
  }
  getdujia() {
    this.get(
      'http://localhost:3000/dujia'
    ).subscribe(
      (res: Banner) => {
        // console.log(res)
        this.store.dujia = res.data;
        this.store.bLoading = false;
      }
    )
  }
  getnews() {
    this.get(
      'http://localhost:3000/news'
    ).subscribe(
      (res: News) => {
        // console.log(res.data)
        this.store.news = res.data;
        this.store.bLoading = false;
      }
    )
  }
  login(name: string,password:string) {  //-------->这里不一定要做业务逻辑的判断,可以返回给调用方订阅,在调用方拿来做判断
    return this.get(
      'http://localhost:3000/login',
      {
        params: new HttpParams().append("name", name).append("password", password),
        withCredentials: true
      }
    )
  }
  reg(name:string,password:string) {
    return this.get(
      'http://localhost:3000/reg',
      {
        params:new HttpParams().append("name",name).append('password',password)
      }
    )
  }
  checkUser() {
    return this.get(
      'http://localhost:3000/user',
      {
        withCredentials: true
      }
    )
  }
  logout() {
    return this.get(
      'http://localhost:3000/logout',
      {
        withCredentials: true
      }
    )
  }
  getgoods() {
    this.get(
      'http://localhost:3000/car'
    ).subscribe(
      (res: Goods) => {
        this.store.bLoading = false;
        this.store.goods = res.data
        // console.log(res.data)
      }
    )
  }
  car(id: string) {
    var flag = false;
    this.store.car.forEach((item, index) => {
      if (item.product_id == id) {
        // console.log(item)
        this.store.car[index].number++
        flag = true;
      }
    })
    if (!flag) {
      this.store.goods.forEach((item:Goodsdata, index) => {
        if (item.product_id == id) {
          // console.log(item,this.store.car)
          this.store.car.push(item)
        }
      })
    }
    this.changeCookie()
  }
  add(id:string) {
    this.store.car.forEach((item, index) => {
      if (item.product_id == id) {
        item.number ++
      }
    })
    this.changeCookie()
  }
  sub(id:string) {
    this.store.car.forEach((item, index) => {
      if (item.product_id == id) {
        if (item.number == 1) {
        } else {
          item.number--
        } 
      }
    })
    this.changeCookie()
  }
  remove(id:string) {
    this.store.car.forEach((item, index) => {
      if (item.product_id == id) {
        this.store.car.splice(index,1)
      }
    })
    this.changeCookie()
  }
  clear() {
    this.store.car = [];
    this.changeCookie()
  }
  changeCookie() {
    var str = JSON.stringify(this.store.car);
    sessionStorage.setItem('goods',str)
  }
}
