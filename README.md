# DBOS.api

## GET

### Users
```
const dbos = require("dbos.api");
const guild = await dbos.get.guild._info(msg.guild.id);

console.log(guild.name)
```

### Guilds
```
const dbos = require("dbos.api");
const req = await dbos.get.user._info(msg.author.id, ''); // Second arg for a server user

console.log(req.username)
```