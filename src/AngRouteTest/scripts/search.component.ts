import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {BookmarkService} from './bookmark.service';
import {BookmarkContext} from './bookmark-context';
import {DropDownComponent} from './dropdown.component';


@Component({
    template: `
    <h3>Boomark Search</h3>
    <div>
        <label>Select Bookmark Context:</label>
        <my-dropdown [contexts]=bookmarkContexts (valueSelected)="displayValueSelected($event)"></my-dropdown>
    </div>
    <div>
      <label>Search: </label>
      <input [(ngModel)]="searchCriteria" placeholder="bookmark name"/>
    </div>
    <p>
      <button (click)="search()">Search</button>
    </p>
    <div>error: {{errormessage}}</div>
  `,
    directives: [DropDownComponent],
    providers: [BookmarkService]
})


export class SearchComponent implements OnInit {
    constructor(private _bookmarkService: BookmarkService) { };

    bookmarkContexts: BookmarkContext[]
    searchCriteria: string;
    errormessage: string;

    ngOnInit() {
        //this.bookmarkContexts = this._bookmarkService.getContextMock();

        this._bookmarkService.getReportContexts()
            .subscribe(
            context => this.bookmarkContexts = context,
            error => this.errormessage = <any>error);
    }

    public selectedItem: string;

    displayValueSelected(ev: string) {
        this.selectedItem = ev;
    }

    search() {
        console.log("search item:" + this.selectedItem);
        console.log("search criteria:" + this.searchCriteria);
    }

}