let books = [
    { id: 1, title: "Things Fall Apart", author: "Chinua Achebe" },
    { id: 2, title: "Homegoing", author: "Yaa Gyasi" },
    { id: 3, title: "Arrow of God", author: "Chinua Achebe" },
];

let nextId = 4; // gives each new book a fresh id

    // Model: getAllNotes . Use req.query.author for the filter.
export function getAllBooks(req, res) {
    const { author } = req.query;

    if (author) {
        const matches = books.filter((book) =>
        book.author.toLowerCase().includes(author.toLowerCase())
    );
        return res.json(matches);
    }   
    res.json(books);
};


export function getBookById(req, res, next) {
    const book = books.find((b) => b.id === Number(req.params.id));
    
    if (!book) {
        const error = new Error("Book not found");
        error.status = 404;
        return next(error);
    }
    res.json(book);
};

export function createBook(req, res, next) {
    const { title, author } = req.body || {};

    if (typeof title !== "string" || title.trim() === "" || typeof author !== "string" || author.trim() === "") {
        const error = new Error("Title and author are required");
        error.status = 400;
        return next(error);
    }

    const newBook = { id: nextId++, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
};


export function updateBook(req, res, next) {
    const book = books.find((b) => b.id === Number(req.params.id));

    if (!book) {
        const error = new Error("Book not found");
        error.status = 404;
        return next(error);
    }

    const { title, author } = req.body || {};

    if (typeof title !== "string" || title.trim() === "" || typeof author !== "string" || author.trim() === "") {
        const error = new Error("Title and author are required");
        error.status = 400;
        return next(error);
    }

    book.title = title;
    book.author = author;
    res.json(book);
};


export function deleteBook(req, res, next) {
    const id = Number(req.params.id);
    const exists = books.some((b) => b.id === id);

    if (!exists) {
        const error = new Error("Book not found");
        error.status = 404;
        return next(error);
    }

    books = books.filter((b) => b.id !== id);
    res.status(204).send();
}

export function countBooks(req, res) {
    res.json({ count: books.length });
}