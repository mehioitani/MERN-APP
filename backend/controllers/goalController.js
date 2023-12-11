import asyncHandler from 'express-async-handler'
//we use asyncHandler to handle errors instead of using try catch or .then
import goalModel from '../models/goalModel.js';
import userModel from '../models/userModel.js';

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
export const getGoals = asyncHandler(async (req, res) => {
    const goals = await goalModel.find({user: req.user.id})
    res.status(200).json(goals);
})

// @desc    Create goals
// @route   POST /api/goals/:id
// @access  Private 
export const createGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }

    const goal = await goalModel.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal)
})

// @desc    Edit goals
// @route   PUT /api/goals/:id
// @access  Private
export const updateGoal = asyncHandler(async (req, res) => {
const goal = await goalModel.findById(req.params.id)

if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
}

const user = await userModel.findById(req.user.id)

//Check for user
if(!user) {
    res.status(401)
    throw new Error('User not found')
}

//Make sure the logged in user matches the goal user
if(goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
}

//here we are passing the id and the text added in the body and new is to create one if it doesn't exist
const updatedGoal = await goalModel.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
})

    res.status(200).json(updatedGoal)
})

// @desc    Delete goal
// @route   DELETE /api/goals
// @access  Private
export const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await goalModel.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await userModel.findById(req.user.id)

//Check for user
if(!user) {
    res.status(401)
    throw new Error('User not found')
}

//Make sure the logged in user matches the goal user
if(goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
}

//we don't assign it to a variable because we don't want to save it
await goal.deleteOne()
    res.status(200).json({id: req.params.id})
})