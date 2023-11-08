const http = require('http');
const fs = require('fs');

const newServer = http.createServer((req, res) => {
    const log = `At ${Date.now()}: ${req.url} request comes \n`;
    fs.appendFile("logs.txt", log, (err, date) => {
        switch (req.url) {
            case '/':
                res.end("You are on home page");
                break;
            case '/about':
                res.end("Hey my name is gaurav shivhare");
                break;
            default:
                res.end("nothing matches");
                break;
        }
    })
});

newServer.listen(8000, () => {
    console.log("Server is listening on port 8000");
});