import jwt from "jsonwebtoken";

import {JWT_SECRET} from "../config/environment.js";

export const generateToken = (payload, secret = JWT_SECRET, expiresIn) => {
	return jwt.sign(payload, secret, { expiresIn: expiresIn || "7d" });
};

export const verifyToken = (token, secret = JWT_SECRET) => {
    try{
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (error) {
        throwError(401, "Invalid token");
    }
}