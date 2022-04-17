var fs = require('fs');

fs.readFile('file.txt', "utf8", function(fault, data) {
    if (fault) {
        throw fault;
    }
    console.log(data);
});

fs.writeFile('file2.txt', "Onur Göker", function(fault, data) {
    if (fault) {
        throw fault;
    }
    console.log("\nFile write success!");
});

fs.appendFile('file2.txt', "\nOnur Göker 2", function(fault, data) {
    if (fault) {
        throw fault;
    }
    console.log("File append success!");
});

fs.unlink('file2.txt', function(fault, data) {
    if (fault) {
        throw fault;
    }
    console.log("File delete success!");
});