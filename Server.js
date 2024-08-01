// const { createServer, request } = require('node:http');

// const hostname = 'localhost';
// const express=require('express');
// const app=express.Router();
// const port = 8000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// app.get("/",request,response=>{
//     response.setEncoding("Hello World from Express Server!");
// })
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const express = require('express');
const app = express();
const port = 8000;
const User=require("./model")
const mongoose=require("mongoose");
const url="mongodb+srv://22at1a0508:NuwNgQ1dDU6nQhXD@cluster0.uga0sgy.mongodb.net/Backend?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(url).then((data)=>{
  console.log("Data connected Successfully");
}).catch((err)=>{
  console.log("Failed to connect with MongoDB",err.message);
})
app.get('/', (req, res) => {
  res.json({
    status:200,
    message:"Welcome to the API",
  })
});
app.get('/user', (req, res) => {
  res.json({
    status:200,
    message:"Welcome to the API",
    data:[{
      id:1,
      name:"John",
      email:"john@gmail.com"
    },
    {
    id:2,
    name:"manu",
    email:"manu@gmail.com"
    }
    ]
  })
});

app.listen(port, () => {

  const data={
    name:'test',
    email:'test@example.com',
    phone:"787878"
  }
  const user=new User(data);
  user.save().then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log(err.message);
  })
  console.log(`Server running at http://localhost:${port}/`);
});


