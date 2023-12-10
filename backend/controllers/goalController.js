import asyncHandler from 'express-async-handler'
//we use asyncHandler to handle errors instead of using try catch or .then

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
export const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
})

// @desc    Create goals
// @route   POST /api/goals/:id
// @access  Private
export const createGoal = asyncHandler(async (req, res) => {
if(!req.body.text){
    res.status(400)
    throw new Error('please add a text field')
}

    res.status(200).json({ message: 'Create Goal' })
})

// @desc    Edit goals
// @route   PUT /api/goals/:id
// @access  Private
export const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}` })
})

// @desc    Delete goal
// @route   DELETE /api/goals
// @access  Private
export const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}` })
})