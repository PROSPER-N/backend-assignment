// middleware/logger.js — prints every request in the terminal
export default function logger(req, res, next) {
    const time = new Date().toISOString();
    console.log(`${time} ${req.method} ${req.url}`);

    next();
}