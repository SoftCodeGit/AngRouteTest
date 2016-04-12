import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home.component';
import {SearchHomeComponent} from './search-home.component';
import {MissionControlComponent} from './mission-control.component';

//import {SearchComponent} from './search.component';
//import {BookmarkOptionComponent} from './bookmark-option.component';


@Component({
    selector: 'my-app',
    template: `
    <nav>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Search']">Search</a>
      <!--<a [routerLink]="['Option']">Bookmark Option</a>-->
    </nav>
    <router-outlet></router-outlet>
    <mission-control></mission-control>
  `,
    //providers: [DialogService, HeroService],
    directives: [ROUTER_DIRECTIVES, MissionControlComponent]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault:true },
    { path: '/search/...', name: 'Search', component: SearchHomeComponent }//,
    //{ path: '/detail', name: 'Option', component: BookmarkOptionComponent }
])
export class AppComponent { }