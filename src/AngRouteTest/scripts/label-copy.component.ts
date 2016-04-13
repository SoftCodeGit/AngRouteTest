﻿import {Component, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Subscription}   from 'rxjs/Subscription';

import {BookmarkOptionValue} from './bookmark-option-value';
import {BookmarkOptionValueChangeService} from './bookmark-option-value-change.service';
import {BookmarkService} from './bookmark.service';

@Component({
    selector: 'label-copy',
    template: `
    <div>
        <label class="copy-label">{{bookmarkText}}</label>
        <button (click)="doCopy()" [ngClass]="copyClass">Copy</button>
    </div>
  `,
    directives: [NgClass],
    providers: [BookmarkService]
})

export class LabelCopyComponent implements OnInit  {
    bookmarkText: string;
    copyClass: string;

    constructor(
        private _bookmarkOptionValueChangeService: BookmarkOptionValueChangeService,
        private _bookmarkService: BookmarkService
        ) { };

    ngOnInit() {
        this._bookmarkOptionValueChangeService.bookmarkOptionValueChanged$.subscribe(optionValue => this.onBookmarkOptionValueChanged(optionValue));
    };



    onBookmarkOptionValueChanged(optionValue: BookmarkOptionValue) {

        //call service to determine bookmarkText
        console.log("onBookmarkOptionValueChanged");
        console.log(optionValue);
        this.bookmarkText = this._bookmarkService.getBookmarkText(optionValue);
    }


    
    doCopy() {

        var bookmarkText = document.querySelector('.copy-label'); 
        console.log(bookmarkText);

        var range = document.createRange();
        range.selectNode(bookmarkText);
        window.getSelection().addRange(range); 


        var successful = document.execCommand('copy');
        //window.alert(successful);
        window.getSelection().removeAllRanges();

        this.copyClass = "copied";

        //wait one second then change the class back to empty.
        setTimeout(() => this.copyClass = "", 1000) 
    }
}