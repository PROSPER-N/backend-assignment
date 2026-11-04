// middleware/logger.js — prints every request in the terminal
export default function logger(req, res, next) {
console.log(`${req.method} ${req.url}`);

next();

}