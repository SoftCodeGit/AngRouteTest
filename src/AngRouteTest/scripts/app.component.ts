import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisListComponent} from './crisis-list.component';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>Component Router</h1>
    <nav>
    <a [routerLink]="['CrisisCenter']" >Crisis Center</a>
    <a [routerLink]="['Heroes']" >Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/crisis-center', name: 'CrisisCenter', component: CrisisListComponent },
    { path: '/heroes', name: 'Heroes', component: HeroListComponent },
    { path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent }
])


export class AppComponent { }