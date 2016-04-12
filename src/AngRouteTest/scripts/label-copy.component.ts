import {Component, Input, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';

import {BookmarkOptionValue} from './bookmark-option-value';
import {BookmarkOptionValueChangeService} from './bookmark-option-value-change.service';

@Component({
    selector: 'label-copy',
    template: `
    <div>
        <label class="copy-label">{{bookmarkCode}}</label>
        <button (click)="doCopy()" [ngClass]="copyClass">Copy</button>
    </div>
  `,
    directives: [NgClass],
    providers: [BookmarkOptionValueChangeService]
})

export class LabelCopyComponent implements OnInit  {
    @Input() bookmarkCode: string;

    copyClass: string;

    constructor(private _bookmarkOptionValueChangeService: BookmarkOptionValueChangeService) {
        console.log("constructor");
    };

    ngOnInit() {
        console.log("in init");
        this._bookmarkOptionValueChangeService.bookmarkOptionValueChanged$.subscribe(optionValue => this.onBookmarkOptionValueChanged(optionValue));

    };



    onBookmarkOptionValueChanged(optionValue: BookmarkOptionValue) {
        console.log("in onBookmarkOptionValueChanged");
        console.log(optionValue.bookmarkCode);

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