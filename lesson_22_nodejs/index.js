// console.log('Hello!');

// npm - NodeJS Package Manager
// paclage.json - файл с описаниями и инструкциями
// Express - фреймворк для разработки на NodeJS

const http = require('http');
const server = http.createServer(function(request, response) {
    response.writeHead(201);
    response.end(JSON.stringify({ data: [{ id: 1, name: 'John', age: 25 }] }));
})

server.listen(8080, 'localhost', function() {
    console.log("WoW! It's working!");
});