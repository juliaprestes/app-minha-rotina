
import Config from "../config";
import jwt from "jsonwebtoken";

export default async function validateToken(token: string) {
    const config = await Config.getInstance();

    try {
        return jwt.verify(
            token,
            config.configuration.security.secret,
            {}
        ) as jwt.JwtPayload;
    } catch (error) {
        return undefined
    }
}

