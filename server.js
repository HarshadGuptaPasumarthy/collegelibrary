var express=require("express");
var app=express();
var db=require("./db")
var path=require("path")
var bodyParser=require("body-parser")


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("welcome to library server")
})

app.get("/api/students",(req,res)=>{
    db.Student.find({},(err,students)=>{
        if(err) res.status(500).send(err);
        res.send(students)
    })
})

app.post("/api/students",(req,res)=>{
    var newStudent=new db.Student(req.body);

    newStudent.save((err,student)=>{
        if(err) res.status(500).send(err);
        res.status(200).send(student)
    })
})
app.put("/api/students/:id",(req,res)=>{
    var id=req.params.id;
    db.Student.findByIdAndUpdate(id,{name:req.body.name,email:req.body.email,phone:req.body.phone,password:req.body.password},{new:true},(err,student)=>{
        if(err) res.status(500).send(err);
        res.status(200).send(student)
    })
})
app.delete("/api/students/:id",(req,res)=>{
    var id=req.params.id;
    db.Student.findByIdAndDelete(id,(err,student)=>{
        if(err) res.status(500).send(err);
        res.status(200).send(student)
    })
})



app.listen(9000,()=>{
    console.log("library server is started")
})