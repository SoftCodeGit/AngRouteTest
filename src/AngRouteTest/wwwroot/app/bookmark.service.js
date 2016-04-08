System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', './bookmark.service.mock'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, bookmark_service_mock_1;
    var BookmarkService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (bookmark_service_mock_1_1) {
                bookmark_service_mock_1 = bookmark_service_mock_1_1;
            }],
        execute: function() {
            BookmarkService = (function () {
                function BookmarkService(http) {
                    this.http = http;
                    this._Url = 'http://localhost:55250/Bookmark/'; // URL to web api
                }
                BookmarkService.prototype.getContextMock = function () {
                    return bookmark_service_mock_1.CONTEXTS;
                };
                BookmarkService.prototype.getReportContexts = function () {
                    //return this.http.get(this._Url).map(res => res.json());
                    //return this.http.get(this._Url).map(res => <BookmarkContext[]>res.json());
                    return this.http.get(this._Url + "GetBookmarkContextList")
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                BookmarkService.prototype.searchBookmarks = function (reportContextCode, searchCriteria) {
                    //let params: URLSearchParams = new URLSearchParams();
                    //params.set('appid', StaticSettings.API_KEY);
                    //params.set('cnt', days.toString());
                    //_url:string;
                    //myval: string;
                    var _url = this._Url + "SearchBookmarks?reportContextCode=" + reportContextCode + "&searchCriteria=" + searchCriteria;
                    console.log(_url);
                    return this.http.get(_url, [])
                        .map(function (res) { return res.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                BookmarkService.prototype.getBookmarksMock = function (reportContextCode, searchCriteria) {
                    return bookmark_service_mock_1.BOOKMARKS;
                };
                BookmarkService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                BookmarkService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BookmarkService);
                return BookmarkService;
            })();
            exports_1("BookmarkService", BookmarkService);
        }
    }
});
//# sourceMappingURL=bookmark.service.js.map