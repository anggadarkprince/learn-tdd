var _ = require('underscore');
module.exports = {
    slugBuilder: function (title) {
        var clean = _.unescape(title);
        return clean.toLowerCase()
            .replace(new RegExp(String.fromCharCode(160), 'g'), '')
            .replace(/[\s+\W \u00a0]+/g, '-');
    },
    affix: function (string, affix, place) {
        if (place === 'prefix') {
            return string + affix;
        }
        else {
            return affix + string;
        }
    }
};