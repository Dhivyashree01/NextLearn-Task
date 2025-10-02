import { getAllCourses, getCourseById,saveOrders } from "../model/courseModel.js";

export const getAllCoursesController = async (res) => {
    try {
        const courses = await getAllCourses();
        res.writeHead(200);
        res.end(JSON.stringify(courses));
    }   catch (error) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
};

 export const getCourseByIdController = async (req, res) => {
    const id = req.url.split('/')[2];
    
    try {
        const course = await getCourseById(id);
        if (course) {
            res.writeHead(200);
            res.end(JSON.stringify(course));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Course not found' }));
        }   
    } catch (error) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
};

export const saveOrdersController = async (req, res) => {
     let body = '';
     req.on('data', chunk => {
         body += chunk.toString();
     });

     req.on('end', async () => {
            const order = JSON.parse(body);
            try {
              const success =  await saveOrders(order);
              if(success){
                res.writeHead(201);
                res.end(JSON.stringify({ message: 'Order saved' }));
              }else{
                res.writeHead(400);
                res.end(JSON.stringify({ message: 'User Not Found' }));
              }
                
            } catch (error) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
            }
        });
}