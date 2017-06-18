var fs = require("fs");

function countingLines (string) {
    var lines = string.split("\n");
    var number = lines.length-1;
    console.log(number);
} 




fs.readFile(process.argv[2], "utf8", function countlines (err, str){
    countingLines(str);
})