const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(__dirname + '/www'));

app.get('/download', (request, resp) => {
    let URL = request.query.URL;
    ytdl.getBasicInfo(URL, (error, info) => {
        if (error) {
            throw new Error();
        } else {
            resp.send(info)
        }
    });

})
app.listen(port);
console.log(`server starts at ${port}`);