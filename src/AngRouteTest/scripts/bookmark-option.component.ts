﻿import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {LabelCopyComponent} from './label-copy.component';
import {BookmarkOptionValue} from './bookmark-option-value';
import {BookmarkOptionValueChangeService} from './bookmark-option-value-change.service';

@Component({
    template: `
    <h3>Boomark Option</h3>
    <label-copy [bookmarkCode]="bookmarkCode"></label-copy>
    <button (click)="doTest()">Test</button>
  `,
    directives: [LabelCopyComponent],
    providers: [BookmarkOptionValueChangeService]
})


export class BookmarkOptionComponent implements OnInit {

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _bookmarkChangeService: BookmarkOptionValueChangeService
    ) { }

    bookmarkCode: string;

    ngOnInit() {
        let id = this._routeParams.get('id');
        console.log("in option");
        console.log(id); 

        this.bookmarkCode = id;

    };


    doTest() {

        let _bookmarkOptionValue: BookmarkOptionValue = new BookmarkOptionValue();
        _bookmarkOptionValue.bookmarkCode = this.bookmarkCode;
      
        

        // "{"IB":"P","STATISTICAL":true,"TYPE":"DEBTORBALANCE","SHOWTOTAL":true,"JUDGMENTFEE":true,"OUTPUT":"TEXT","FEE":"100"};


        //var item = { key: "IB", value: "P" };

        //_bookmarkOptionValue.formValues = [];


        //_bookmarkOptionValue.formValues.push(item);
   
        _bookmarkOptionValue.formValues.push({ key: "IB", value: "P" });
        _bookmarkOptionValue.formValues.push({ key: "STATISTICAL", value: "" });
        _bookmarkOptionValue.formValues.push({ key: "TYPE", value: "DEBTORBALANCE" });
        _bookmarkOptionValue.formValues.push({ key: "NUMOPTION", value: "6" });
        _bookmarkOptionValue.formValues.push({ key: "SHOWTOTAL", value: "true" });
        _bookmarkOptionValue.formValues.push({ key: "OUTPUT", value: null });

        this._bookmarkChangeService.bookmarkOptionValueChangeBroadcast(_bookmarkOptionValue);
    }

}