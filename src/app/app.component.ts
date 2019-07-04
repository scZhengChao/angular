import { Component, Output, ViewChild, SimpleChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StoreService } from './services/store.service';
import { DataService } from './services/data.service';
import { User } from './interfaces/user';
@Component({
  selector: 'app-root',         //组件名
  templateUrl: './app.component.html', //模板  引入
  styleUrls: ['./app.component.css']   //样式引入
})
export class AppComponent {
  constructor(
    public router: Router,
    public store: StoreService,
    public data:DataService
  ) {
    router.events.subscribe(  //路由服务上的监听,events,系统自带的,可以代开routermodule.for(root)查看
      (ev) => {
        // console.log(ev)
        if (ev instanceof NavigationEnd) {   //这是路由跳转的最后一步了,
          // console.log(ev.urlAfterRedirects)  //这是路由跳转后的地址
          let path = ev.urlAfterRedirects
          if (/home|video|reconmend|user|login|reg|goods/.test(path)) this.store.bFoot = true;
          if (/pages|special/.test(path)) this.store.bFoot = false;
        }
      }
    )
  }
  ngOnInit(): void {
    //不好用
    // this.data.checkUser().subscribe(
    //   (res: User) => {
    //     if (res.err == 0) {
    //       this.store.user = res.data;
    //     } else {
    //       this.router.navigate(['/login'])
    //     }
    //     console.log(res)
    //     this.store.bLoading = false
    //   }
    // )
    var arr = JSON.parse(sessionStorage.getItem('goods'))
    this.store.car = arr;
  }
  ngOnChanges(changes: SimpleChanges): void {  //只针对输入属性放生变化时.不对状态管理,
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.



    
    // console.log('fuwu变化了')
    // var str = JSON.stringify(this.store.car);
    // sessionStorage.setItem('goods',str)
  }
  
}
