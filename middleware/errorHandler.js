 // middleware/errorHandler.js — every error in the app ends up here

export default function errorHandler(err, req, res, next) {

    const status = err.status || 500;
        console.error(`[${status}] ${err.message}`);

res.status(status).json({ error: err.message });
}