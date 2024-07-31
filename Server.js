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

app.get('/', (req, res) => {
  res.send('Hello World from Express Server!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
