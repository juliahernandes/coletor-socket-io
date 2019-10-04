const app = require('express')(),
    http = require('http').createServer(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/rola', (req, res) => {
    const content = 'hghjsagdhasghd';
    res.send(`<html><p>${content}</p><html>`)
})

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('chat message', (msg) => {
//         console.log('message: ', msg);
//     });
// });

http.listen(port, () => {
    console.log('Listening on port ', port);
});