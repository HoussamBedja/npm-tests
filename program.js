var http = require("http");
var results = [];
var count = 0;

function httpGet(i) {
    var info = [];
    http.get(process.argv[2+i],function(res){
        res.setEncoding('utf8');
        res.on("data",function(input){
            info.push(input);
        });
        res.on("error",console.error);
        res.on("end",function(){
            results[i] = info.join("");
            count++;
        if (count == 3) {
            printResults();
        }
        });
        
        
    });
}

function printResults() {
    for (var j=0; j<3; j++) {
        console.log(results[j]);   
    }
}


 for (var i=0; i<3; i++) {
     httpGet(i);
 }
