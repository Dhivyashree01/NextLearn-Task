import http from 'http';
import dotenv from 'dotenv';
import courseRoutes from './routes/courseRoutes.js';


dotenv.config();
const  PORT = process.env.PORT || 3000;
 
const server = http.createServer((req,res)=>{
    res.setHeader('content-type','application/json');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Origin','http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    return courseRoutes(req,res);
});

server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});