const server = require('../4-http');
const http = require('http');

describe('4-http server tests', () => {
    var app;
    beforeAll(() => {
        app.server.listen(1245);
    });

    AfterAll(() => {
        app.close();
    });
    
});
