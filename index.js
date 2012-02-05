var server = require('./server');
var router = require('./router');
var requestHanlders = require('./requestHandlers');

var handle = {};
handle['/'] = requestHanlders.start;
handle['/start'] = requestHanlders.start;
handle['/upload'] = requestHanlders.upload;

server.start(router.route, handle);
