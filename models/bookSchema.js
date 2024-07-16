const mongoose = require('mongoose');

const defaultUrl = "https://m.media-amazon.com/images/I/61eSuRxPvYL._AC_UF1000,1000_QL80_.jpg";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: defaultUrl,
        set: function(v) {
            return v || this.image;
        }
    },
    authorName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    copiesSold: {
        type: Number,
        default: 0
    },
    releaseDate: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    publisherName: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
