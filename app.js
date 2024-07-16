const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const Book = require("./models/bookSchema.js");

const port = 8080;
// setup database 
const mongoUrl = 'mongodb://127.0.0.1:27017/BookStore';
main()
.then(() => {
    console.log("database is connected ");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoUrl);
}

app.listen(port, (req, res) => {
    console.log(`app is listening at ${port} port`);
});

// setup home page 
app.get("/", (req, res) => {
    res.send("Home page is running ");
});

// set view engine to ejs to render ejs files on home page
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/home", async (req, res) => {
    try {
        const allBooks = await Book.find({});
        res.render("books", { books: allBooks });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Endpoint to handle buying a book
app.post("/buy/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ success: false, message: 'Book not found' });
        }
        book.copiesSold += 1;
        await book.save();
        res.json({ success: true, copiesSold: book.copiesSold });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});
