﻿import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {BookmarkService} from './bookmark.service';
import {BookmarkContext} from './bookmark-context';
import {Bookmark} from './bookmark';
import {DropDownComponent} from './dropdown.component';
import {Grid} from './grid/grid';
import {Column} from './grid/column';

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
    <grid name="person grid" [rows]="people" [columns]="columns"></grid>
  `,
    directives: [DropDownComponent, Grid],
    providers: [BookmarkService]
})


export class SearchComponent implements OnInit {
    people: Array<Person>;
    columns: Array<Column>;

    constructor(private _bookmarkService: BookmarkService) {

        this.people = this.getPeople();
        this.columns = this.getColumns();

    };



    bookmarkContexts: BookmarkContext[];
    bookmarks: Bookmark[];
    searchCriteria: string;
    errormessage: string;
    myval: string;

    ngOnInit() {
        //this.bookmarkContexts = this._bookmarkService.getContextMock();

        this._bookmarkService.getReportContexts()
            .subscribe(
            context => this.bookmarkContexts = context,
            error => this.errormessage = <any>error);
    }

    public selectedBookmarkContext:string;

    displayValueSelected(ev: string) {
        this.selectedBookmarkContext = ev;
    }

    search() {
        console.log("search item:" + this.selectedBookmarkContext);
        console.log("search criteria:" + this.searchCriteria);

        this.bookmarks = this._bookmarkService.getBookmarksMock(this.selectedBookmarkContext, this.searchCriteria);
        

        this._bookmarkService.searchBookmarks(this.selectedBookmarkContext, this.searchCriteria)
            .subscribe(
            context => this.bookmarks = context,
            error => this.errormessage = <any>error);

        console.log(this.bookmarks);
    }

    getPeople(): Array<Person> {
        return [
            { firstName: 'Joe', lastName: 'Jackson', age: 20 },
            { firstName: 'Peter', lastName: 'Smith', age: 30 },
            { firstName: 'Jane', lastName: 'Doe', age: 50 },
            { firstName: 'Tim', lastName: 'Smith', age: 80 }
        ];
    }

    getColumns(): Array<Column> {
        return [
            new Column('firstName', 'First Name'),
            new Column('lastName', 'Last Name'),
            new Column('age', 'Age')
        ];
    }

}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}