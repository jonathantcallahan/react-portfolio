const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended:false } ));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));