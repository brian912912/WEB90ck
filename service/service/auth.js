import { throwError } from "../config/error.js";
import { generateToken } from "../utils/jwt.js";
import { comparePassword,hashPassword } from "../utils/password-handle.js";
import User from "../models/users.js";
import MESSAGES from "../message/auth.js";

export const registerService = async (userData) => {
	const { email, password } = userData;
	const existingUser = await User.findOne({ email });
	if (existingUser) {
		throwError(400, MESSAGES.EMAIL_ALREADY_EXISTS);		
	}

	const passwordHash = hashPassword(password);
	const newUser = await User.create({ ...userData, password: passwordHash });
	newUser.password = undefined;
	return newUser;
};

export const loginService = async (userData) => {
	const { email, password } = userData;
	const existingUser = await User.findOne({ email });
	if (!existingUser) {
		throwError(400, MESSAGES.INVALID_CREDENTIALS);
	}
	const isPasswordValid = comparePassword(password, existingUser.password);
	if (!isPasswordValid) {
		throwError(400, MESSAGES.INVALID_CREDENTIALS);
	}
	const accessToken = generateToken({ id: existingUser._id, role: existingUser.role });
	existingUser.password = undefined;
	return { user: existingUser, accessToken };
};