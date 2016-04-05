System.register(['angular2/platform/browser', './app.component', 'angular2/router'], function(exports_1) {
    var browser_1, app_component_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            //import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
            //bootstrap(AppComponent, [
            //    ROUTER_PROVIDERS, bind(APP_BASE_HREF).toValue(location.pathname)
            //]);
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map