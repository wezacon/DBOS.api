const pkg = require('./package.json');
const updateNotifier = require('update-notifier');
const https = require('https');
const request = require('request');
const fetch = require('node-fetch');
var modulename = "DBOS.api";

const API = "https://dbos.glitch.me/api";


updateNotifier({
	pkg: {
		name: pkg.name,
		version: pkg.version
	},
	updateCheckInterval: 0
}).notify();
module.exports = {
    get: {
        user: {
            _info: async function(userId, serverId){
                if(!userId){
                    new TypeError('No userId provided!');
                }
                if(!serverId){
                    var target = "/global";
                } else {
                    var target = "/s/" + serverId;
                }
                let settings = { method: "Get" };
                const res = await fetch(API + target + '/u/' + userId, settings)
                const proJson = await res.json();
                // console.log(proJson.user)
                return proJson.user;
            }
        },
        guild: {

        }
    }

};