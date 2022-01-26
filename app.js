const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


const firstname ="Adolf";
const lastname = "Hitler";
const birthdate = "20-4-1889";
const deathdate = "30-5-1945";
const description = "var en lille gut som ikke brød sig om jøder. fun fact han var vegetar";
const dictator = {'firstname':firstname,'lastname':lastname,'birthdate':birthdate,'deathdate':deathdate,'description':description};

const dictators = [dictator];

//get method
app.get('/', (req,res) => {res.send(dictators)});

//post method
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
   
});

//delete method
app.delete('/del',(req,res) => {
   
    
    const reposIndex = req.body.index;
    dictators.splice(reposIndex,1);
    
});

//output port listener
app.listen(port, () =>{console.log(`port is listening ${process}` )} );
