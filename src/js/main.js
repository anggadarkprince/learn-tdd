(function () {
    // https://www.sitepoint.com/understanding-module-exports-exports-node-js/
    var $ = require('jquery');
    var _ = require('underscore');
    var multipler = require('./multipler.js');
    var User = require('./user.js');
    var helper = require('./helpers.js');

    $(function () {
        var root = document.getElementById('root');
        root.innerHTML = 'multipler 5 x 111 = ' + multipler(5);
        _.each([1, 2, 3], console.log);

        var derby = new User('angga', 'anggadarkprince', 'anggadarkprince@gmail.com');
        derby.save();
        $(root).append('<br>user ' + JSON.stringify(derby.get()));

        $(root).append('<br>', helper.slugBuilder('Angga    &nbsp; Ari Wijaya'));
        $(root).append('<br>', helper.slugBuilder('Angga&%&*&8768Ari Wijaya'));
    });
}());
