System.register([], function(exports_1) {
    var CONTEXTS, BOOKMARKS;
    return {
        setters:[],
        execute: function() {
            exports_1("CONTEXTS", CONTEXTS = [
                { "ReportContextCode": "ACTION", "ReportContextDesc": "Action" },
                { "ReportContextCode": "ACTIONENTITY", "ReportContextDesc": "Party" },
                { "ReportContextCode": "ACTIONSERVICE", "ReportContextDesc": "Service" },
                { "ReportContextCode": "RECEIPT", "ReportContextDesc": "Receipt" }
            ]);
            exports_1("BOOKMARKS", BOOKMARKS = [
                {
                    "BookmarkCode": "DefendantTitle", "ReportContextCode": "CASE", "BookmarkDesc": "Defendant Title from the Case", "HasBookmarkOptions": true },
                { "BookmarkCode": "ActionStatus", "ReportContextCode": "ACTION", "BookmarkDesc": "Description of Action Status", "HasBookmarkOptions": true },
                { "BookmarkCode": "ActionType", "ReportContextCode": "ACTION", "BookmarkDesc": "Description of ActionType", "HasBookmarkOptions": true },
                { "BookmarkCode": "CourtName", "ReportContextCode": "ACTION", "BookmarkDesc": "Issuing Court Name", "HasBookmarkOptions": true }
            ]);
        }
    }
});
//# sourceMappingURL=bookmark.service.mock.js.map