import {Component, Input, OnInit} from 'angular2/core';
import {Column} from './column';
import {Sorter} from './sorter';

@Component({
    selector: 'grid',
    //template: '<h1>in grid</h1>',
    inputs: ['rows: rows', 'columns: columns'],
    templateUrl: './app/grid/grid-ui.html'
})

export class Grid implements OnInit {

    columns: Array<Column>;
    rows: Array<any>;

    @Input() name: string;

    sorter = new Sorter();

    sort(key) {
        this.sorter.sort(key, this.rows);
    }

    ngOnInit() {
        console.log(this.name);
    }
}