import { enableProdMode } from '@angular/core';      //angluar 的核心包
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';    //渲染浏览器

import { AppModule } from './app/app.module';   // 引入根模块 而不是组件，
import { environment } from './environments/environment';    //根据这个判断是否开发环境


if (environment.production) {           // 如果是开发环境 ，就执行这个
  enableProdMode();
}
import './assets/js/flexible.js';
import './assets/js/flow.js';

platformBrowserDynamic().bootstrapModule(AppModule)     //渲染浏览器到的函数组件执行 bootstrap 相当于render  渲染根模块并且返回一个promise
  .catch(err => console.error(err));                       // 捕获渲染错误的
