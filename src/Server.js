const http = require('http');
const mongoose = require('mongoose');

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Mô hình MongoDB
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/api/users') {
        User.find({}, (err, users) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(users));
            }
        });
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
