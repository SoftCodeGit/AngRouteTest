///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bind} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'

//import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES, APP_BASE_HREF, LocationStrategy, RouteParams, ROUTER_BINDINGS} from 'angular2/router';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, bind(APP_BASE_HREF).toValue(location.pathname)
]);
