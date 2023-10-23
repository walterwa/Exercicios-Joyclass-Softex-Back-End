"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var soap = require("soap");
var http = require("http");
var service = {
    MyService: {
        MyPort: {
            MyFunction: function (args, callback) {
                var result = { message: "Teste, ".concat(args.name) };
                callback(result);
            },
        },
    },
};
var xml = require('fs').readFileSync('myserviceTest.wsdl', 'utf8');
var server = http.createServer(function (req, res) {
    res.statusCode = 404;
    res.end();
});
server.listen(8000, function () {
    var wsdlPath = '/wsdl';
    server.on('request', function (req, res) {
        if (req.url === wsdlPath) {
            res.setHeader('Content-Type', 'application/xml');
            res.statusCode = 200;
            res.end(xml);
        }
        else {
            res.statusCode = 404;
            res.end();
        }
    });
    var soapServer = soap.listen(server, '/wsdl', service, xml);
    console.log('SOAP na porta: 8000');
});
