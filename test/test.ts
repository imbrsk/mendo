const { MendoClient } = require('../mendo-private-api/src/core/MendoClient');


const client = MendoClient.userClient.login({
    username: 'Boris21',
    password: 'fbc0e683',
});

var cookie = client.getCookie()

console.log(cookie)
