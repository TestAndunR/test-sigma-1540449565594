let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {
    console.log(event);
    Swagger.http({
        url: `https://api.dev.fintechmart.online/kyck/v1.0/fintech/kyck/kyckindo/v1/users`,
        method: 'post',
        query: {},
        headers: { "X-Authorization": "123445566", "Accept": "application/json", "Content-Type": "application/json" },
        body: {
            "name": "SLAppforge"
        }
    }).then((response) => {
        // your code goes here
        // console.log(response);
        callback(null, response);
    }).catch((err) => {
        // error handling goes here
        // console.log(err);
        callback(err);
    });

    
}