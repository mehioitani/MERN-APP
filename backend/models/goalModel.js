import mongoose from "mongoose";

const goalSchema = mongoose.Schema({
    user: {
        //each user will have a unique _id
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
},
    {
        timestamps: true,
    })

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;