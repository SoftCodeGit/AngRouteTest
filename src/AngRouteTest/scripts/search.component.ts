import {Component, OnInit}   from 'angular2/core';
import {Router} from 'angular2/router';

import {BookmarkService} from './bookmark.service';
import {BookmarkContext} from './bookmark-context';
import {Bookmark} from './bookmark';
import {BookmarkOptionComponent} from './bookmark-option.component';


import {DropDownComponent} from './dropdown.component';
import {Grid} from './grid/grid';
import {Column} from './grid/column';

@Component({
    template: `
    <h3>Boomark Search</h3>
    <div class="container">
    <div>
        <label>Select Bookmark Context:</label>
        <my-dropdown [contexts]=bookmarkContexts (valueSelected)="displayValueSelected($event)"></my-dropdown>
    </div>
    <div>
      <label>Search: </label>
      <input [(ngModel)]="searchCriteria" placeholder="search criteria"/>
    </div>
    <div>
      <label>Selected Bookmark: </label>
      <input [value]="selectedBookmark" placeholder="bookmark name"/>
    </div>
    </div>
    <p>
      <button (click)="search()">Search</button>
    </p>
    <div>{{errormessage}}</div>
    <grid name="person grid" [rows]="bookmarks" [columns]="columns" (rowClicked)="getRowClicked($event)" (viewClicked)="getViewClicked($event)"></grid>
     <router-outlet></router-outlet>
  `,
    directives: [DropDownComponent, Grid],
    providers: [BookmarkService]
})



export class SearchComponent implements OnInit {
    //people: Array<Person>;
    columns: Array<Column>;

    constructor(private _bookmarkService: BookmarkService, private _router: Router) {

        //this.people = this.getPeople();
        this.columns = this.getColumns();

    };

    bookmarkContexts: BookmarkContext[];
    bookmarks: Bookmark[];
    searchCriteria: string = "";
    errormessage: string;
    myval: string;
    selectedBookmark: string = "";

    ngOnInit() {
        this.bookmarkContexts = this._bookmarkService.getContextMock();

        //this._bookmarkService.getReportContexts()
        //    .subscribe(
        //    context => this.bookmarkContexts = context,
        //    error => this.errormessage = <any>error);
    }

    public selectedBookmarkContext:string;

    displayValueSelected(ev: string) {
        this.selectedBookmarkContext = ev;
    }

    search() {
        //console.log("search item:" + this.selectedBookmarkContext);
        //console.log("search criteria:" + this.searchCriteria);

        this.bookmarks = this._bookmarkService.getBookmarksMock(this.selectedBookmarkContext, this.searchCriteria);
        

        //this._bookmarkService.searchBookmarks(this.selectedBookmarkContext, this.searchCriteria)
        //    .subscribe(
        //    context => this.bookmarks = context,
        //    error => this.errormessage = <any>error);

        //console.log(this.bookmarks);
    }

    getRowClicked(row:Bookmark) {
        //console.log("In search");
        //console.log(row);
        this.selectedBookmark = row.BookmarkCode;
    }

    getViewClicked(row: Bookmark) {
        //console.log("In search");
        console.log(row);
        this.selectedBookmark = row.BookmarkCode;
        this._router.navigate(['Option', { id: row.BookmarkCode }]);
    }

    //getPeople(): Array<Person> {
    //    return [
    //        { firstName: 'Joe', lastName: 'Jackson', age: 20 },
    //        { firstName: 'Peter', lastName: 'Smith', age: 30 },
    //        { firstName: 'Jane', lastName: 'Doe', age: 50 },
    //        { firstName: 'Tim', lastName: 'Smith', age: 80 }
    //    ];
    //}

    getColumns(): Array<Column> {
        return [
            new Column('BookmarkCode', 'Bookmark Code'),
            new Column('ReportContextCode', 'Context'),
            new Column('BookmarkDesc', 'Description'),
            new Column('HasBookmarkOptions', 'Options')         
        ];
    }

}

//interface Person {
//    firstName: string;
//    lastName: string;
//    age: number;
//}