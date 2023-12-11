import express from "express";
import { getGoals, createGoal, updateGoal, deleteGoal } from "../controllers/goalController.js";
import Protect from '../middleware/authMiddleware.js'
const router = express.Router();

// // you can write it in this syntax (less lines of code)
// router.route('/').get(getGoals).post(updateGoal)

router.get('/goals', Protect, getGoals)

router.post('/goals', Protect, createGoal)
//req.params.id instead of putting it in the controller
router.put('/goals/:id', Protect, updateGoal)

router.delete('/goals/:id', Protect, deleteGoal)



export default router;