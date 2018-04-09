var express=require('express');

var mysql=require('mysql');

var bodyParser=require('body-parser');

var app=express();

app.use(bodyParser.urlencoded({ extended: true }));

var pool=mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'ooooo',
  port:3306
})

app.post('/', (req, res) => {
  
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection((err,connection) => {
    if(err) throw err
    console.log("sssss")
    var sql=`select * from lou where fenlei='${req.body.fenlei}' limit ${req.body.one},${req.body.two}`
    connection.query(sql,(err,data) => {
      if(err) throw err
      console.log(data)
      res.send(data)
      
      
      connection.end()
      
      
    })
  })
});

app.post('/detail', (req, res) => {
  
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection((err,connection) => {
    if(err) throw err
    console.log("ooooo")
    var sql=`select * from lou where id=${req.body.id}`
    connection.query(sql,(err,data) => {
      if(err) throw err
      console.log(data)
      res.send(data)
      
      
      connection.end()
      
      
    })
  })
});

app.get('/news',(req,res) => {
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection((err,connection) => {
    if(err) throw err
    console.log('kkkkk')
    var sql = 'select * from news'
    connection.query(sql,(err,data) => {
      if(err) throw err
        console.log(data)
        res.send(data)
        connection.end()
    })
  })
})

app.get('/img',(req,res) => {
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection((err,connection) => {
    if(err) throw err
    console.log('kkkkk')
    var sql = 'select * from img'
    connection.query(sql,(err,data) => {
      if(err) throw err
        console.log(data)
        res.send(data)
        connection.end()
    })
  })
})

app.post('/oo',(req,res) => {
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection((err,connection) => {
    if(err) throw err
    console.log('kkkkk')
    var sql = 'select * from news'
    connection.query(sql,(err,data) => {
      if(err) throw err
        console.log(data)
        res.send(data)
        connection.end()
    })
  })
})

app.listen(8000,function(){
  console.log("ok")
})

