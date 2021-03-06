const app = require('express')(),
    http = require('http').createServer(app),
    io = require('socket.io')(http),
    port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/subway', (req, res) => {
    const content = new Array(5).fill({'chuchuFurioso': 'subway'})
    res.send(`<html><p>${JSON.stringify(content)}</p><html>`)
})

const retorno = () => 'coiso coisado';

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg, retorno) => {
        console.log('message: ', msg);

        retorno();
    });
});

http.listen(port, () => {
    console.log('Listening on port ', port);
});