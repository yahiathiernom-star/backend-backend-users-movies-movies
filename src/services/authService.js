import prisma from "../models/prisma.js";
import { comparePasswords } from "../utils/passwords.js";
import { generateToken } from "../utils/token.js";

const login = async (email, password) => {
    // Find if the user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if(!user) {
        const error = new Error("Invalid email or password");
        error.status = 401;
        throw error;
    }

    //Compare passwords
    const isPasswordValid = await comparePasswords(password, user.password);
    if(!isPasswordValid) {
        const error = new Error("Invalid email or password");
        error.status = 401;
        throw error;
    }

    // Generate token
    const token = await generateToken(user.id);

    return {
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
    }, token };
};
export { login };