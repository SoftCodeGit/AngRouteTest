import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {LabelCopyComponent} from './label-copy.component';

@Component({
    template: `
    <h3>Boomark Option</h3>
    <label-copy [bookmarkCode]="bookmarkCode"></label-copy>
  `,
    directives: [LabelCopyComponent]
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