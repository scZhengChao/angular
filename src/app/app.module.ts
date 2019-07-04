import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { ReconmendComponent } from './components/reconmend/reconmend.component';
import { LoginComponent } from './components/login/login.component';
import { SliderComponent } from './components/slider/slider.component';
import { RegComponent } from './components/reg/reg.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoadingComponent } from './components/loading/loading.component';
import { UserComponent } from './components/user/user.component';
import { CarComponent } from './components/car/car.component';
import { SpecialComponent } from './components/special/special.component';
import { PagesComponent } from './components/pages/pages.component';
import { InfoComponent } from './components/info/info.component';
import { SetComponent } from './components/set/set.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';


import { RoutingModule } from './routing/routing.module';
import { InfoaComponent } from './components/infoa/infoa.component';
import { InfobComponent } from './components/infob/infob.component';  //导入路由模块,特性模块
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    ReconmendComponent,
    LoginComponent,
    SliderComponent,
    RegComponent,
    GoodsComponent,
    LoadingComponent,
    UserComponent,
    CarComponent,
    SpecialComponent,
    PagesComponent,
    InfoComponent,
    SetComponent,
    FooterComponent,
    ErrorComponent,
    InfoaComponent,
    InfobComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
