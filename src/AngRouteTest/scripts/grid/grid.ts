import {Component, Input, OnInit, Output, EventEmitter} from 'angular2/core';
import {Column} from './column';
import {Sorter} from './sorter';

@Component({
    selector: 'grid',
    //template: '<h1>in grid</h1>',
    //inputs: ['rows: rows', 'columns: columns'],
    templateUrl: './app/grid/grid-ui.html'
})

export class Grid implements OnInit {
    @Input() rows: Array<any>;
    @Input() columns: Array<any>;

    @Output() rowClicked = new EventEmitter();

    //columns: Array<Column>;
    //rows: Array<any>;

    @Input() name: string;

    sorter = new Sorter();

    sort(key) {
        this.sorter.sort(key, this.rows);
    }

    ngOnInit() {
        console.log(this.name);
    }

    onRowClicked(row: any) {
        //console.log(row);
        this.rowClicked.emit(row);
    }

    //hasOptions(row: any, col: Column) {
    //    return row[col.name];
    //}
}