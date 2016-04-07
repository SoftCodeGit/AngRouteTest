import { Input, Component, Output, EventEmitter } from 'angular2/core';
import {BookmarkContext} from './bookmark-context';

@Component({
    selector: 'my-dropdown',
    template: `
    <select (change)="onSelect($event.target.value)">
      <option *ngFor="#context of contexts" [value]="context.ReportContextCode">{{context.ReportContextDesc}}</option>
    </select>
    <div>selection={{selectedContext.ReportContextDesc}}</div>
    `
})

export class DropDownComponent {
    @Input() contexts: BookmarkContext[];
    @Output() valueSelected = new EventEmitter();

    public selectedContext: BookmarkContext = new BookmarkContext();

    onSelect(reportContextCode) {
        this.valueSelected.emit(reportContextCode);
    }
}