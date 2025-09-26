import handleAsync from "../utils/handle-async.js";
import { createResponse } from "../config/response.js";
import MESSAGES from "../message/auth.js";
import { loginService, registerService } from "../service/auth.js";


export const authRegister = handleAsync(async (req, res) => {
	const newUser = await registerService(req.body);
	if (!newUser) {
		createResponse(res, 400, MESSAGES.REGISTER_FAILURE);
	}
	createResponse(res, 200, MESSAGES.REGISTER_SUCCESS, newUser);
});

export const authLogin = handleAsync(async (req, res) => {
	const { user, accessToken } = await loginService(req.body);     
	if (!user || !accessToken) {
		createResponse(res, 400, MESSAGES.LOGIN_FAILURE);
	}
	createResponse(res, 200, MESSAGES.LOGIN_SUCCESS, { user, accessToken });
});                                             