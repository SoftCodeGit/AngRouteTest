import { Injectable, EventEmitter } from 'angular2/core';
import { IBookmarkOptionValue } from './bookmark-option-value';

@Injectable()
export class BookmarkOptionValueChangeService {
    bookmarkOptionValueChanged$: EventEmitter<IBookmarkOptionValue> = new EventEmitter<IBookmarkOptionValue>();

    bookmarkOptionValueChangeBroadcast(value: IBookmarkOptionValue): void {
        console.log("bookmarkOptionValueChangeBroadcast");
        console.log(value);
        this.bookmarkOptionValueChanged$.emit(value);
    }
}
