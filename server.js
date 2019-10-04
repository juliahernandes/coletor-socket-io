const app = require('express')(),
    http = require('http').createServer(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/rola', (req, res) => {
    const content = new Array(5).fill({'chuchuFurioso': 'rola'})
    res.send(`<html><p>${JSON.stringify(content)}</p><html>`)
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ', msg);

        //socket.emit('chat received', 'coiso coisado');
    });
});

http.listen(port, () => {
    console.log('Listening on port ', port);
});