var fs = require("fs");

fs.readdir(process.argv[2], function filter (err, list) {
    // if (err) {
    //     console.log(err);
    // }
    for (var i=0; i<list.length-1; i++) {
        if (list[i].endsWith("."+process.argv[3])) {
            console.log(list[i]);
        }
    }
})