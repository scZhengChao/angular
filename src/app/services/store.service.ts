import { Injectable, DoCheck } from '@angular/core';
import { Banner, BannerData } from '../interfaces/banner';
import { NewsData } from '../interfaces/news';
import { UserData, User } from '../interfaces/user';
import { Goods, Goodsdata } from '../interfaces/goods';

@Injectable({
  providedIn: 'root'
})
export class StoreService  {

  constructor() { }
  banner: BannerData;
  dujia: BannerData;
  news: NewsData;
  user: UserData;
  bFoot: boolean=false;
  bLoading: boolean = false;
  goods: Goodsdata[] = [];
  car: Goodsdata[] = [];
 
}
