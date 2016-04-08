﻿import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {BookmarkContext}     from './bookmark-context';
import {Bookmark} from './bookmark';
import {CONTEXTS, BOOKMARKS}     from './bookmark.service.mock';

@Injectable() //don't forget parens
export class BookmarkService {
    constructor(private http: Http) { }

    private _Url = 'http://localhost:55250/Bookmark/';  // URL to web api



    getContextMock() {
        return CONTEXTS;
    }

    getReportContexts() {

        //return this.http.get(this._Url).map(res => res.json());
        //return this.http.get(this._Url).map(res => <BookmarkContext[]>res.json());


        return this.http.get(this._Url + "GetBookmarkContextList")
            .map(res => <BookmarkContext[]>res.json())
            .do(data => console.log(data))
            .catch(this.handleError);

    }

    searchBookmarks(reportContextCode:string, searchCriteria:string) {

        var _url: string = this._Url + "SearchBookmarks?reportContextCode=" + reportContextCode + "&searchCriteria=" + searchCriteria;

        console.log(_url);

        return this.http.get(_url, [])
            .map(res => <Bookmark[]>res.json())
            .do(data => console.log(data)) 
            .catch(this.handleError);

    }

    getBookmarksMock(reportContextCode: string, searchCriteria: string) {
        return BOOKMARKS;
    }


    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }



}