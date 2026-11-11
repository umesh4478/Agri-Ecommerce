import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, resp) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return resp.status(400).json({
                success: false,
                message: "Email already Registered"
            });
        }

        // 1. Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 2. Save the hashed password in the database, NOT the plaintext one
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword 
        });

        resp.status(201).json({
            success: true,
            message: "Signup successfully"
        });

    } catch (err) {
        resp.status(500).json({
            success: false,
            message: err.message
        });
    }
};

export const Login = async (req, resp) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user) {
            return resp.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        // 1. Compare the provided plaintext password with the hashed password in DB
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return resp.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // 2. Generate a JWT token containing the user's ID
        // Make sure to define JWT_SECRET in your .env file
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET || "your_fallback_secret_key",
            {expiresIn:"id"}
        );

        resp.status(200).json({                                      // <<< ADDED: Success response
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {                                                
        resp.status(500).json({
            success: false,
            message: err.message
        });
    }
};