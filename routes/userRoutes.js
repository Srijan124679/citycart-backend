import express from 'express';
import { getAdmin, getcurrentUser } from '../controller/usercontroller.js';
import isAuth from '../middleware/isAuth.js';
import adminAuth from '../middleware/adminAuth.js';


let userRoutes = express.Router()
userRoutes.get("/getcurrentuser",isAuth,getcurrentUser)
userRoutes.get("/getadmin",adminAuth,getAdmin)


export default userRoutes;