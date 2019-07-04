import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { VideoComponent } from '../components/video/video.component';
import { ReconmendComponent } from '../components/reconmend/reconmend.component';
import { UserComponent } from '../components/user/user.component';
import { PagesComponent } from '../components/pages/pages.component';
import { SpecialComponent } from '../components/special/special.component';
import { InfoComponent } from '../components/info/info.component';
import { SetComponent } from '../components/set/set.component';
import { LoginComponent } from '../components/login/login.component';
import { RegComponent } from '../components/reg/reg.component';
import { ErrorComponent } from '../components/error/error.component';


import { UserService } from '../guard/user.service'; //前置守卫
import { InfoaComponent } from '../components/infoa/infoa.component';
import { InfobComponent } from '../components/infob/infob.component';
import { GoodsComponent } from '../components/goods/goods.component';
import { CarComponent } from '../components/car/car.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'video', component: VideoComponent },
  { path: 'reconmend', component: ReconmendComponent },
  { path: 'user', component: UserComponent ,canActivate:[UserService]},
  { path: 'pages/:id', component: PagesComponent },
  { path: 'special', component: SpecialComponent },
  {
    path: 'info', component: InfoComponent, children: [
      { path: '', redirectTo: '/info/infoa', pathMatch: "full" },
      { path: 'infoa', component: InfoaComponent },
      { path: 'infob', component: InfobComponent },
  ]},
  { path: 'set', component: SetComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegComponent },
  { path: 'goods', component: GoodsComponent },
  { path: 'car', component: CarComponent },
  { path: '', redirectTo: '/home' ,pathMatch:'full'},
  { path: '**', component: ErrorComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{enableTracing:false})  //第二个参数,路由监听,监听的钩子函数
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
