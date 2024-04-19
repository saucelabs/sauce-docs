!(function () {
    if (
        window.analytics instanceof Node ||
        window.analytics instanceof HTMLElement
    )
        window.analytics = [];
    const analytics = (window.analytics = window.analytics || []);
    if (!analytics.initialize)
        if (analytics.invoked)
            window.console &&
                console.error &&
                console.error('Segment snippet included twice.');
        else {
            analytics.invoked = !0;
            analytics.methods = [
                'trackSubmit',
                'trackClick',
                'trackLink',
                'trackForm',
                'pageview',
                'identify',
                'reset',
                'group',
                'track',
                'ready',
                'alias',
                'debug',
                'page',
                'once',
                'off',
                'on',
                'addSourceMiddleware',
                'addIntegrationMiddleware',
                'setAnonymousId',
                'addDestinationMiddleware',
            ];
            analytics.factory = function (e) {
                return function () {
                    const t = Array.prototype.slice.call(arguments);
                    t.unshift(e);
                    analytics.push(t);
                    return analytics;
                };
            };
            for (let e = 0; e < analytics.methods.length; e++) {
                const key = analytics.methods[e];
                analytics[key] = analytics.factory(key);
            }
            analytics.load = function (key, e) {
                const t = document.createElement('script');
                t.type = 'text/javascript';
                t.async = !0;
                t.src = `https://cdn.segment.com/analytics.js/v1/${key}/analytics.min.js`;
                const n = document.getElementsByTagName('script')[0];
                n.parentNode.insertBefore(t, n);
                analytics._loadOptions = e;
            };
            analytics._writeKey = '13rd58d6s3';
            analytics.SNIPPET_VERSION = '4.13.2';
            analytics.load('13rd58d6s3');
            analytics.identify();
        }
})();
