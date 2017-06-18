var fs = require("fs");

module.exports = function (directory, extension, callback) {
    var listToFilter = [];

    fs.readdir(directory, function filter (err, list) {
    if (err) {
        return callback(err);
    }
    for (var i=0; i<list.length; i++) {
        if (list[i].endsWith("."+extension)) {
            listToFilter.push(list[i]);
        }
    }
    callback(err, listToFilter);
})
}