# DBOS.api

You can get all the objects from the API headers

## GET

### Users
(API header - https://dbos.glitch.me/api/(serverid/global)/u/userId)
```
const dbos = require("dbos.api");
const guild = await dbos.get.guild._info(msg.guild.id);

console.log(guild.name)
```

### Guilds
(API header - https://dbos.glitch.me/api/global/s/(serverid))
```
const dbos = require("dbos.api");
const req = await dbos.get.user._info(msg.author.id, ''); // Second arg for a server user

console.log(req.username)
```