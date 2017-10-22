#!/usr/bin/env node
var sys = require('util')
var spawn = require('child_process').spawn;
//console.log(process.argv)
list=process.argv;
list.splice(0,2)
list.forEach(function (filename) {
    if (!filename){
        console.log("File Not Found");
    }else {
        var tail = spawn("tail", ["-f", filename]);
        tail.stdout.on("data", function (data) {
            console.log("==> "+ filename + " <==");
            sys.puts(data);
        });
    }

});
