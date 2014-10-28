'use strict';

/* Filters */

SongsApplication.filter('newlines', function () {
    return function(text) {
        return text.replace(/\n/g, '<br/>');
    }
});