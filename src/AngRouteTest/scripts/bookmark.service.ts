import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {BookmarkContext}     from './bookmark-context';
import {CONTEXTS}     from './bookmark.service.mock';


@Injectable() //don't forget parens
export class BookmarkService {
    constructor(private http: Http) { }

    private _Url = 'http://localhost:55250/Bookmark/GetBookmarkContextList';  // URL to web api


    getContextMock() {
        return CONTEXTS;
    }

    getReportContexts() {

        //return this.http.get(this._Url).map(res => res.json());
        //return this.http.get(this._Url).map(res => <BookmarkContext[]>res.json());

        return this.http.get(this._Url)
            .map(res => <BookmarkContext[]>res.json())
            .do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError);

    }

    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}