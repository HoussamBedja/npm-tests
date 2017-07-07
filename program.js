// var http = require("http");
// var results = [];
// var count = 0;

// function httpGet(i) {
//     var info = [];
//     http.get(process.argv[2+i],function(res){
//         res.setEncoding('utf8');
//         res.on("data",function(input){
//             info.push(input);
//         });
//         res.on("error",console.error);
//         res.on("end",function(){
//             results[i] = info.join("");
//             count++;
//         if (count == 3) {
//             printResults();
//         }
//         });
        
        
//     });
// }

// function printResults() {
//     for (var j=0; j<3; j++) {
//         console.log(results[j]);   
//     }
// }


//  for (var i=0; i<3; i++) {
//      httpGet(i);
//  }


// var net = require('net');
// var server = net.createServer(function (socket) {  
// // socket handling logic
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth()+1;
// var day = date.getDate();
// var hour = date.getHours();
// var minutes = date.getMinutes();
// if(month<10) month = "0"+ month;
// if(day<10) day = "0"+ day;
// var date = year+"-"+month+"-"+day+""+" "+hour+":"+minutes+"\n";
// socket.end(date);

// })  
// server.listen(process.argv[2]);


var http = require('http')  
var fs = require('fs') 
var server = http.createServer(function (req, res) {  
    var file = fs.createReadStream(process.argv[3]);
    file.pipe(res);
})  
server.listen(process.argv[2]);  