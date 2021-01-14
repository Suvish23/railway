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
  

//Get a single Product...
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

//Create a Product.......












const port= process.env.PORT; 

app.listen(port,()=>{
    console.log(`server runing in node on port ${port}`)
}
  );







