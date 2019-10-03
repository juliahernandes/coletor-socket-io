const app = require('express')(),
    http = require('http').createServer(app),
    io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ', msg);
    });
});

http.listen(3000, () => {
    console.log('Listening on port 3000');
});