import { Router } from 'express';

// Bring in the five controller functions. ../ means “go up one folder” first.
import {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
    countBooks
} from '../controllers/booksController.js'; 


const router = Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/count', countBooks);

export default router;
