import {Component, OnInit, Input}   from 'angular2/core';

@Component({
    selector: 'label-copy',
    template: `
    <div>
        <label>{{bookmarkCode}}</label>
        <button>Copy</button>
    </div>
  `
})

export class LabelCopyComponent implements OnInit {
    @Input() bookmarkCode: string;

    ngOnInit() {


    };
}