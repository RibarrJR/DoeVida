App.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'my-api-key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
}]);