const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


const firstname ="kris";
const lastname = "pedersen";
const birthdate = "pedersen";
const deathdate = "pedersen";
const description = "pedersen";
const user = {'firstname':firstname,'lastname':lastname,'birthdate':birthdate,'deathdate':deathdate,'description':description};

const dictators = [user,user,user];

app.get('/', (req,res) => {res.send(dictators)});


app.post('/repos',function (req,res)  
{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const birthdate = req.body.birthdate;
    const deathdate = req.body.deathdate;
    const description = req.body.description;
    const dictator ={'firstname':firstname,'lastname':lastname,'birthdate':birthdate,'deathdate':deathdate,'description':description};
    dictators.push(dictator);
    res.send(dictators)
    // console.log(firstname,'username');
    // res.send({'firstname':firstname,'lastname':lastname})

});

app.delete('/del',(req,res) => {
   
    const reposIndex = req.body.index;
   
    dictators.splice(reposIndex,1);
    
});


app.listen(port, () =>{console.log(`port is listening ${process}` )} );




// app.get('/palle', (req, res) => {res.send('there is life on the moon!')});
// app.listen(port, () => {
//     console.log(`listening on port ${port}`)
// });