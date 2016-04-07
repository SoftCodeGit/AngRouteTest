import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home.component';
import {SearchComponent} from './search.component';
import {BookmarkOptionComponent} from './bookmark-option.component';



//import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
//import {HeroListComponent}     from './heroes/hero-list.component';
//import {HeroDetailComponent}   from './heroes/hero-detail.component';

//import {DialogService}         from './dialog.service';
//import {HeroService}           from './heroes/hero.service';

@Component({
    selector: 'my-app',
    template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Search']">Search</a>
      <a [routerLink]="['Option']">Bookmark Option</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    //providers: [DialogService, HeroService],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

    //{ // Crisis Center child route
    //    path: '/crisis-center/...',
    //    name: 'CrisisCenter',
    //    component: CrisisCenterComponent,
    //    useAsDefault: true
    //},

    //{ path: '/heroes', name: 'Heroes', component: HeroListComponent },
    //{ path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent },
    //{ path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', { id: 3 }] }


    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/search', name: 'Search', component: SearchComponent },
    { path: '/detail', name: 'Option', component: BookmarkOptionComponent }
])
export class AppComponent { }