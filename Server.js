
const express = require('express');
const cors = require('cors');
const path = require("path");
const fs = require("fs");
const parser = require("body-parser");
const app = express();
const routes = express.Router();
const User = require("./model")
const mongoose = require("mongoose");
app.use(routes);
app.use(parser.json());
app.use(express.json());
const port = 8000;
const uri = "mongodb+srv://swatigathiya138:IoCeHmdFyCHcYZBr@cluster0.powfvr2.mongodb.net/Backend?retryWrites=true&w=majority&appName=Cluster0";
app.use(cors());
mongoose.connect(uri).then((data) => {
    console.log("Database connected Successfully")
}).catch((err) => {
    console.log("Failed to connect with Mongoose", err.message)
})


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
})
//  http://localhost:8000/create-user
app.post("/create-user", async (req, res) => {
    const user = req.body;

    console.log("User Data  ", user);
    const data = new User(user);
    const davedData = await data.save();

    if (user) {
        return res.json(davedData);
    }
    return res.json({ message: "Data not found" });

})

app.get("/get-users", async (req, res) => {
    const users = await User.find();
    if (users) {
        return res.json(users);
    }
    return res.json({ message: "Data not found" });
})


app.delete("/delete-user/:id", async (req, res) => {
    const id = req.params.id;
    const data = await User.deleteOne({ _id: id })
    if (data.deletedCount > 0) {
        return res.json({ message: "User deleted successfully" });
    }
})

app.listen(port, () => {
    //      const data={
    //         name: 'test',
    //         email: 'test@example.com',
    //         phone:"787878"
    //      }
    //    const user = new User(data);
    //    user.save().then((data)=>{
    //        console.log(data)
    //    }).catch((err)=>{
    //        console.log(err.message)
    //    })
    console.log("Server listening on port ", port)
})