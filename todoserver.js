const express =require('express');
const bodyParser = require('body-parser')
const app=express();
app.use('/',express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
todo=[];
app.post('/add',function (req,res) {
    todo.push(req.body.todo);
    res.send(todo);

});
app.post('/update',function (req,res) {
   todo[req.body.index]=req.body.todo;
    res.send(todo);
});
app.get('/display',function (req,res) {
    res.send(req.query);
})
// app.post('/postcall',function (req,res) {
//     res.send(req.body);
// })

app.listen(5000,function () {
    console.log("application running on port 5000");
});