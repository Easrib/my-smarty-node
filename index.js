const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello from my over smarty pant')
})

const users = [
    { id: 1, name: "sabana", email: "sabana@sabana.com", phone: "0178888888" },
    { id: 2, name: "sabnoor", email: "sabnoor@sabana.com", phone: "0178888888" },
    { id: 3, name: "suchorita", email: "suchorita@sabana.com", phone: "0178888888" },
    { id: 4, name: "suchonda", email: "suchonda@sabana.com", phone: "0178888888" },
    { id: 5, name: "Srabonty", email: "Srabonty@sabana.com", phone: "0178888888" },
    { id: 6, name: "Sabila", email: "Sabila@sabana.com", phone: "0178888888" },
    { id: 7, name: "Sohana", email: "Sohana@sabana.com", phone: "0178888888" }
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    } else {
        res.send(users)
    }

})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening to port', port);
})