import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedPassword});
    
    try {
        await newUser.save();
        res.status(201).json('user created successfully');
    } catch(error) {
        // manual error
        // next(errorHandler(552, "error is created by me in this function"));
        next(error);
    }
};