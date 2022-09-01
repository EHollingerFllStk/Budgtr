
//Require depencies
const budgets = require("./models/budget.js")

const express = require('express')
const budget = require("./models/budget.js")
//Initialize
const app = express()
const port = 3000

//Middleware
app.use(express.urlencoded({extended: false}))

//Define routes - 

// app.get("/budgets/", (req, res)=>{
//         res.send(budgets);
//     });
//index
app.get("/budgets/", (req, res) => {
    res.render ("index.ejs", {
        allBudgets: budgets
    })
})

//new
app.get("/budgets/new", (req, res) =>{
    res.render("new.ejs")
})

//show
app.get("/budgets/:indexOfBudgetsArray",(req, res)=> {
    res.render("show.ejs", {
       budget: budgets[req.params.indexOfBudgetsArray]
    })
})
//New
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs")
})
//Post
app.post("/budgets", (req, res) => {
    budgets.push(req.body)
    res.redirect("/budgets")
})

// app.post("/budgets", (req, res) => {
//     console.log("Create route accessed!")
//     res.send("This route works")
//   })

// LISTEN ON PORT...
app.listen(port, ()=>{
    console.log(`listening on port `, port)
});
