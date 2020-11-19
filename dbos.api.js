const DA_pack = require('./package.json');
const updateNotifier = require('update-notifier');
const request = require('request');
var modulename = "DBOS.api";

const notifier = updateNotifier({pkg});
 
notifier.notify();
 
console.log(notifier.update);

const API = "https://dbos.glitch.me";

module.exports = {

    user: {
       
    },
    guild: {

    }

};