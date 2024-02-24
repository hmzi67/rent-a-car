import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        default: "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/"
    },
}, { timestamps: true });   // add two info in database: time of creation and update of user

//mongodb automatically set User for one or more user
const User = mongoose.model('User', userSchema);

export default User;