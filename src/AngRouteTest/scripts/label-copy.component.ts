import {Component, Directive, ElementRef, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
//import Clipboard from 'clipboard/clipboard';

//import Clipboard from 'clipboard';

@Component({
    selector: 'label-copy',
    template: `
    <div>
        <label class="copy-label">{{bookmarkCode}}</label>
        <button (click)="doCopy()" [ngClass]="copyClass">Copy</button>
    </div>
  `,
    directives: [NgClass]
})

export class LabelCopyComponent implements OnInit {
    @Input() bookmarkCode: string;

    copyClass: string;


    ngOnInit() {
        

    };

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