const pkg = require('./package.json');
const updateNotifier = require('update-notifier');
const https = require('https');
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
        version: function() {
            return pkg.version
        },
        theme: async function(target){
            if(target == "site"){
                var get = 'site'
            } else {
                var get = 'bot'
            }

             let settings = { method: "Get" };
             const res = await fetch(API + '/' + get + '/theme', settings)
             if(!res.status == 200) return new Error('Status code was not 200')
             const proJson = await res.json();
             return proJson.theme   
        },
        global: {
            users: async function(serverId){
                if(serverId == ""){
                   var target = "g/u/all";
                } else {
                   var target = `u/s/${serverId}/all`;
                }

                let settings = { method: "Get" };
                const res = await fetch(API + '/' + target, settings)
                if(!res.status == 200) return new Error('Status code was not 200')
                const proJson = await res.json();
                return proJson.users
            }
        },
        user: {
            _info: async function(userId, serverId){
                if(userId == ''){
                    new TypeError('No userId provided!');
                }
                if(serverId == ''){
                    var target = "/global";
                } else {
                    var target = "/s/" + serverId;
                }
                let settings = { method: "Get" };
                const res = await fetch(API + target + '/u/' + userId, settings)
                if(!res.status == 200) return new Error('Status code was not 200')
                const proJson = await res.json();
                return proJson.user;
            },
            level: async function(userId, serverId){
                if(userId == ''){
                    new TypeError('No userId provided!');
                }
                if(serverId == ''){
                    new TypeError('No serverId provided!');
                }
                let settings = { method: "Get" };
                const res = await fetch(`${API}/s/${serverId}/u/${userId}/level`, settings)
                if(!res.status == 200) return new Error('Status code was not 200')
                const proJson = await res.json();
                return proJson.user;
            }
        },
        bot: {
            _info: async function(){
                let settings = { method: "Get" };
                const res = await fetch(API + '/bot', settings)
                if(!res.status == 200) return new Error('Status code was not 200')
                const proJson = await res.json();
                return proJson;
            }
        },
        guild: {
            _info: async function(serverId){
                if(serverId == ''){
                    new Error('Invalid serverId...');
                }
                let settings = { method: "Get" };
                const res = await fetch(API + '/global/s/' + serverId, settings)
                if(!res.status == 200) return new Error('Status code was not 200')
                const proJson = await res.json();
                return proJson.guild;
            }
        }
    }

};