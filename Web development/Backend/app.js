import express from 'express';

const app = express();
const port= 3000;
const hostname= "localhost";


app.get('/', (req, res)=> {
    res.send({body:"Welcome"});
});

app.listen(port,hostname, ()=>{
    console.log('Server running port 3000');
})

export default app;