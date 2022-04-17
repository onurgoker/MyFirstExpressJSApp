var log = {
    info: function(information) {
        console.log("Information: " + information)
    },
    fault: function(fault) {
        console.log('Fault: ' + fault)
    }
}

module.exports = log;