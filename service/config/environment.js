import dotenv from "dotenv";

dotenv.config({
    path: ".env",
    override: true,
    debug: true,
    systemvars: true,
    silent: true,
    ignoreEnvFile: false
})
export const {
    PORT,
    MONGO_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    JWT_ALGORITHM,
    JWT_ISSUER,
    JWT_AUDIENCE,
    JWT_SUBJECT,
} = process.env;