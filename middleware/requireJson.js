// Add middleware/requireJson.js : reject any POST without Content-Type: application/json with 415. Hint: !req.is("application/json") .

export default function requireJson(req, res, next) {
    if (req.method === "POST" && !req.is("application/json")) {
        const error = new Error("Content-Type must be application/json");
        error.status = 415;
        return next(error);
    }
    next();
}