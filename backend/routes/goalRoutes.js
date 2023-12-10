import express from "express";
import {getGoals,createGoal,updateGoal,deleteGoal} from "../controllers/goalController.js";
const router = express.Router();

// // you can write it in this syntax (less lines of code)
// router.route('/').get(getGoals).post(updateGoal)

router.get('/goals', getGoals)

router.post('/goals', createGoal)
//req.params.id instead of putting it in the controller
router.put('/goals/:id', updateGoal)

router.delete('/goals/:id', deleteGoal)



export default router;