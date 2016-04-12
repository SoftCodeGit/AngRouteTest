import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';


@Component({
    template: `
    <h3>Boomark Option</h3>
    {{bookmarkCode}}
  `
})


export class BookmarkOptionComponent implements OnInit {

    constructor(
        private _router: Router,
        private _routeParams: RouteParams
    ) { }

    bookmarkCode: string;

    ngOnInit() {
        let id = this._routeParams.get('id');
        console.log("in option");
        console.log(id); 

        this.bookmarkCode = id;

    };
}