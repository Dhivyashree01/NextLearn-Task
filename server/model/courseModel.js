import mysqlPool  from "../mysqlConnection.js";

export const getAllCourses = async () => {
    const [rows] = await mysqlPool.query('SELECT * FROM courses');
    return rows;
}

 export const getCourseById = async (id) => {
    // const [rows] = await mysqlPool.query('SELECT * FROM courses WHERE id = ? and price = ?' , [id],[price]);
    const [rows] = await mysqlPool.query(`SELECT * FROM courses WHERE id = ${id}`);
    return rows[0];

}

export const saveOrders = async (order) => {
    const { name,email,phone,courses} = order;
    const [exist]= await mysqlPool.query('SELECT * FROM users WHERE email = ?', [email]);
    if(exist.length!==0){ 
    for(const id of courses){
         await mysqlPool.query('INSERT INTO orders (user_id,course_id) VALUES (?, ?)', [exist[0].id,id]);
        }
        return true;
     }
     return false;
}