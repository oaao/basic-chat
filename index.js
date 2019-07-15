var app  = require('express')();
var http = require('http').createServer(app);
var io   = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

    console.log(Date.now() + ': a User has connected');

    socket.on('disconnect', function() {
        console.log(Date.now() + ': User disconnected')
    });

    socket.on('chatmsg', function(msg) {
        console.log('MESSAGE @ ' + Date.now() + ': ' + msg);
    });

});

http.listen(3000, function() {
    console.log('Server listening on *:3000')
});