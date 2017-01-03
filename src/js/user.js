var USERS = [];

/** A module. Its name is module:foo/bar.
 * @module User
 */

/**
 * User object wrapper that contain user entity
 * @param {string} name user full name
 * @param {string} username id of user
*/
function User(name, username, email) {
    this.name = name;
    this.username = username;
    this.email = email;
}

/** An event. Its name is module:User.event:find.
 * Find user and return its data position
 * @param {string} username id of user
 * @returns {number} position of data (-1 is not found)
 * @event module:User.event:find
 */
User.prototype.find = function (username) {
    for (var i = 0; i < USERS.length; i++) {
        if (USERS[i].id === username) {
            return i;
        }
    }
    return -1;
};

/** An event. Its name is module:User/age.event:get.
 * Get user data and return as object
 * @param {string} username id of user
 * @returns {object} user data (null is not found)
 * @event module:User.event:get
 */
User.prototype.get = function (username) {
    var result;
    if (username === null || username === undefined) {
        result = this.find(this.username);
    } else {
        result = this.find(username);
    }

    if (result !== -1) {
        return USERS[result];
    }
    return null;
};

/** An event. Its name is module:User.event:save.
 * Save current user to database
 * @return {boolean} status of save operation
 * @event module:User.event:save
 */
User.prototype.save = function () {
    USERS.push({
        id: this.username,
        name: this.name,
        email: this.email
    });
    return true;
};

/** An event. Its name is module:User.event:update.
 * Update current user to database
 * @return {boolean} status of save operation
 * @event module:User.event:update
 */
User.prototype.update = function () {
    var exist = this.find(this.username);
    if (exist !== -1) {
        USERS.splice(exist, 1, {
            id: this.username,
            name: this.name,
            email: this.email
        });
        return true;
    }
    return false;
};

/** An event. Its name is module:User.event:delete.
 * Delete current user to database
 * @return {boolean} status of save operation
 * @event module:User.event:delete
 */
User.prototype.delete = function () {
    var result = this.find(this.username);
    if (result !== -1) {
        USERS.splice(result, 1);
        return true;
    }
    return false;
};

module.exports = User;