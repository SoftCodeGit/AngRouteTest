import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {BookmarkService} from './bookmark.service';
import {BookmarkContext} from './bookmark-context';


@Component({
    template: `
    <h3>Boomark Search</h3>
  `,
    providers: [BookmarkService]
})


export class SearchComponent implements OnInit {
    constructor(private _bookmarkService: BookmarkService) { };

    public bookmarkContexts: BookmarkContext[]

    ngOnInit() {
        this.bookmarkContexts = this._bookmarkService.getContextMock();
    }
}