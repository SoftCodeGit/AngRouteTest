import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {SearchComponent}   from './search.component';
import {BookmarkOptionComponent} from './bookmark-option.component';


@Component({
    template: `
    <router-outlet></router-outlet>
  `,
    directives: [RouterOutlet]
})
@RouteConfig([
        { path: '/', name: 'Search', component: SearchComponent, useAsDefault: true },
        { path: '/:id', name: 'Option', component: BookmarkOptionComponent }
])
export class SearchHomeComponent { }
