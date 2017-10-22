#!/usr/bin/env node
var sys = require('util')
var spawn = require('child_process').spawn;
console.log(process.argv)

var filename = process.argv[2];

if (!filename)
    return sys.puts("Usage: node myfile");

var tail = spawn("tail", ["-f", filename]);
sys.puts("start tailing");

tail.stdout.on("data", function (data) {
    sys.puts(data);
});
