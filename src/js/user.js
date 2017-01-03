var USERS = [];

function User(name, username, email) {
    this.name = name;
    this.username = username;
    this.email = email;
}

User.prototype.find = function (username) {
    for (var i = 0; i < USERS.length; i++) {
        if (USERS[i].id === username) {
            return i;
        }
    }
    return -1;
};

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

User.prototype.save = function () {
    USERS.push({
        id: this.username,
        name: this.name,
        email: this.email
    });
    return true;
};

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

User.prototype.delete = function () {
    var result = this.find(this.username);
    if (result !== -1) {
        USERS.splice(result, 1);
        return true;
    }
    return false;
};

module.exports = User;