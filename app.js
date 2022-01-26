const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.get('/repos', (req,res) => {res.send('hello world')});

app.get('/palle', (req, res) => {res.send('there is life on the moon!')});

app.listen(port, () =>{console.log(`port is listening ${process}` )} );




// app.listen(port, () => {
//     console.log(`listening on port ${port}`)
// });