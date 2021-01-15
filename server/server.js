require("dotenv").config();
const express = require('express')
const app=express();
const db = require('./db/index')
app.use(express.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header( "Access-Control-Allow-Methods","GET,PUT,POST,DELETE,PATCH,OPTIONS")
    next();
});
  
app.get("/trains",async(req,res)=>{
    try {
        const results=await db.query("Select *  from trains_table");
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({status:"failed"});
    }
});
app.post("/insertrains",async(req,res)=>{
    try {
        const results=await db.query("INSERT into trains_table (train_name,train_type,train_frequency,no_of_coaches,start_time,end_time) values ($1,$2,$3,$4,$5,$6) returning *",[req.body.train_name,req.body.train_type,req.body.train_frequency,req.body.no_of_coaches,req.body.start_time,req.body.end_time]);
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({status:"failed"});
    }
});
app.post("/removetrains",async(req,res)=>{
    try {
        const results=await db.query("DELETE from trains_table where train_name=$1",[req.body.train_name]);
        console.log(results);
        res.status(200).json({ status: 'success',data :results.rows});
    } 
    catch (error) {
        res.status(500).json({status:"failed"});
    }
});
app.get("/stations",async(req,res)=>{
    try {
        const results=await db.query("Select *  from stations_table");
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({status:"failed"});
    }
});
app.post("/addstations",async(req,res)=>{
    try {
        const results=await db.query("INSERT into stations_table (station_name,no_of_employees,no_of_platforms,no_of_visits_perday) values ($1,$2,$3,$4) returning *",[req.body.station_name,req.body.no_of_employees,req.body.no_of_platforms,req.body.no_of_visits_perday]);
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({status:"failed"});
    }
});
app.post("/stat_remove",async(req,res)=>{
    
    try { 
        
        
        const results=await db.query("DELETE from stations_table where station_name=$1",[req.body.station_name]);
       
        res.status(200).json({ status: 'success',data :results.rows[0]});
    } 
    catch (error) {
        res.status(500).json({status:"failed"});
    }
});


app.get("/employees",async(req,res)=>{
    try {
        const results=await db.query("Select *  from employees_table");
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({status:"failed"});
    }
});
app.post("/adddeleteemployees",async(req,res)=>{
    try {
        const results=await db.query("INSERT into employees_table (employees_name,department,salary,ph_no,email,station_id,train_id) values ($1,$2,$3,$4,$5,$6,$7) returning *",[req.body.employees_name,req.body.department,req.body.salary,req.body.ph_no,req.body.email,req.body.station_id,req.body.train_id]);
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({status:"failed"});
    }
});
app.post("/deleteemployees",async(req,res)=>{
    try {
        const results=await db.query("DELETE from employees_table where employees_name=$1",[req.body.employees_name]);
        console.log(results);
        res.status(200).json({ status: 'success',data :results.rows});
    } 
    catch (error) {
        res.status(500).json({status:"failed"});
    }
});


app.get("/train_coaches",async(req,res)=>{
    try {
        const results=await db.query(`SELECT T.train_id,T.train_name,T.train_type,T.train_frequency,C.coach_id,C.coach_type FROM trains_table T JOIN coaches_table C ON T.train_id=C.train_id`);
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results.rows);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({status:"failed"});
    }
});


app.get("/train_employees",async(req,res)=>{
    try {
        const results=await db.query(` SELECT T.train_id,T.train_name,T.train_type,T.train_frequency,E.employees_id,E.employees_name,E.department,E.salary,E.ph_no FROM trains_table T JOIN employees_table E ON T.train_id=E.train_id`);
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results.rows);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({status:"failed"});
    }
});


app.get("/station_employees",async(req,res)=>{
    try {
        const results=await db.query(` SELECT s.station_id,s.station_name,s.no_of_platforms,e.employees_id,e.employees_name,e.department,e.salary,e.ph_no FROM stations_table s JOIN employees_table e ON s.station_id=e.station_id`);
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results.rows);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({status:"failed"});
    }
});


app.get("/train_travel",async(req,res)=>{
    try {
        const results=await db.query(` SELECT   t.train_name,t.train_type,t.start_time,t.end_time,  trip.from_station_id,trip.journey_time,  s.station_name,  jp.platform_number FROM trips_table trip JOIN trains_table t  ON t.train_id=trip.train_id JOIN stations_table s  ON s.station_id=trip.from_station_id JOIN journey_platforms jp  ON t.train_id=jp.train_id WHERE jp.station_id=trip.from_station_id`);
        res.status(200).json({ status: 'success',data :results.rows});
        console.log(results.rows);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({status:"failed"});
    }
});
app.post('/Register',async(req, res) => {
    try {
        const {email}=req.body;
        const Email=await db.query("SELECT * from users where email=$1",[email]);
        if(Email.rows[0].email === email){
            res.status(400).json({status:"email is already registered"});
        }
    } 
    catch (error) {
        const results = await db.query("INSERT INTO users(name,email,password) values ($1,$2,$3) returning *",[req.body.name,req.body.email,req.body.password]);
        res.status(200).json({ status: 'success',data :results.rows[0]});
    }
  });
 
  //Login Route
  app.post('/Login', async(req, res) => {
    try{
        const {email,password}=req.body;
        const Email= await db.query("SELECT * from users where email=$1 ",[req.body.email] );
        const Password=Email.rows[0].password;
         if(Email.rows[0].email === email  && Password ===password)
         {
             res.json({status:"successfully Logged in",name:Email.rows[0].name,id:Email.rows[0].user_id,phonenumber:Email.rows[0].phonenumber,address:Email.rows[0].address,email:Email.rows[0].email})
           }
          else if(Password!== password)
          res.status(401).json({data:"Incorrect Password "})
          }    
catch(error){
  res.status(400).json({status:"Invalid input"})
}});


const port= process.env.PORT; 

app.listen(port,()=>{
    console.log(`server runing in node on port ${port}`)
}
  );







