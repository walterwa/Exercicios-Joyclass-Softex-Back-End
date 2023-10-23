import * as soap from 'soap';
import * as http from 'http';

const service = {
    MyService: {
        MyPort: {
            MyFunction: (args, callback) => {
                const result = {message: `Teste, ${args.name}`};
                callback(result);
            },
        },
    },
};

const xml = require('fs').readFileSync('myserviceTest.wsdl', 'utf8');

const server = http.createServer((req, res) => {
    res.statusCode = 404;
    res.end();
});

server.listen(8000, () => {
    const wsdlPath = '/wsdl';
    server.on('request', (req, res) => {
        if(req.url === wsdlPath) {
            res.setHeader('Content-Type', 'application/xml');
            res.statusCode = 200;
            res.end(xml);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });

    const soapServer = soap.listen(server, '/wsdl', service, xml);
    console.log('SOAP na porta: 8000');    
});