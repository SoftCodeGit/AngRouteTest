export interface IBookmarkOptionValue {
    bookmarkCode: string;
    formValues: BookmarkOptionValuePair[];

    //formValues: {
    //    key: string, value: string
    //}[];
}

export class BookmarkOptionValue implements IBookmarkOptionValue {
    bookmarkCode: string;
    formValues: BookmarkOptionValuePair[];
    //formValues: {
    //    key: string, value: string
    //}[];

    constructor() {
        this.formValues = [];
    }
}

export class BookmarkOptionValuePair {
    key: string;
    value: string;
}
