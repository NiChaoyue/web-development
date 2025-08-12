/*
  author: NiChaoyue
*/
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // Compared with Hash Password
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const users = [
    {
        vorname: 'John',
        nachname: 'Doe',
        passwordHash: bcrypt.hashSync('password123', 10) // 示例用户
    }
];

app.post('/login', (req, res) => {
    const { vorname, nachname, password } = req.body;

    const user = users.find(user => user.vorname === vorname && user.nachname === nachname);
    if (user && bcrypt.compareSync(password, user.passwordHash)) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
