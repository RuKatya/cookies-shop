const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 4578

app.use(express.static("client/build"))
app.use(express.json())

const { DBConnect } = require('./DBConnect')

try {
    DBConnect;
} catch (error) {
    console.log(error)
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

try {
    app.listen(PORT, () => {
        console.log(`listen on http://localhost:${PORT}`)
    })
} catch (error) {
    console.log(error)
}

