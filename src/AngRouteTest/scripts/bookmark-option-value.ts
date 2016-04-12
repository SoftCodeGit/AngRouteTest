export interface IBookmarkOptionValue {
    bookmarkCode: string;
    formValues: {
        key: string, value: string
    }[];
}

export class BookmarkOptionValue implements IBookmarkOptionValue {
    bookmarkCode: string;
    formValues: {
        key: string, value: string
    }[];
}
