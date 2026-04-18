import { verifyToken } from "../utils/token.js";

const authenticate = (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({ message: "Authentification échouée" });
        }
        const token = authHeader.split(" ")[1];
        const decodedToken = verifyToken(token);

        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        res.status(500).json({ message: "authentification échouée"

         });
        }     
};

export default authenticate;