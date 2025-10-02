import { getAllCoursesController, getCourseByIdController, saveOrdersController } from "../controller/courseController.js";

const courseRoutes = (req, res) => {
    
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    if (req.url === '/getAllCourses' && req.method === 'GET') {
        return getAllCoursesController(res);

    } else if (req.url.startsWith('/getCourseById/') && req.method === 'GET') {
        return getCourseByIdController(req, res);

    } else if (req.url === '/saveOrders' && req.method === 'POST') {
        return saveOrdersController(req, res);
    } 

 
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
};

export default courseRoutes;